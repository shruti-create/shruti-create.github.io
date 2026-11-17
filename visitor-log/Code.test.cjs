const assert = require('node:assert/strict')
const fs = require('node:fs')
const path = require('node:path')
const test = require('node:test')
const vm = require('node:vm')

function makeScript() {
  const rows = []
  const sheet = {
    getLastRow: () => rows.length,
    appendRow: row => rows.push(row),
    setFrozenRows: () => {},
    getRange: () => ({
      setBackground() { return this },
      setFontColor() { return this },
      setFontWeight() { return this },
    }),
  }
  const context = {
    LockService: { getScriptLock: () => ({ waitLock() {}, releaseLock() {} }) },
    SpreadsheetApp: {
      getActiveSpreadsheet: () => ({
        getSheetByName: () => sheet,
        insertSheet: () => sheet,
      }),
      flush() {},
    },
    ContentService: { createTextOutput: text => ({ text }) },
  }
  const code = fs.readFileSync(path.join(__dirname, 'Code.gs'), 'utf8')
  vm.runInNewContext(code, context)
  return { doPost: context.doPost, rows }
}

test('accepts a visit and prevents formulas in visitor-supplied cells', () => {
  const { doPost, rows } = makeScript()
  const response = doPost({ postData: { contents: JSON.stringify({
    site: 'https://shruti-create.github.io',
    ip: '2001:db8::1',
    city: '=IMPORTXML("https://example.com")',
    region: 'New York',
    country: 'United States',
    page: '/#research',
  }) } })

  assert.equal(response.text, 'ok')
  assert.equal(rows.length, 2)
  assert.equal(rows[1][1], '2001:db8::1')
  assert.equal(rows[1][2], "'=IMPORTXML(\"https://example.com\")")
  assert.equal(rows[1][5], '/#research')
})

test('rejects malformed or foreign submissions without writing a row', () => {
  const { doPost, rows } = makeScript()
  assert.equal(doPost({ postData: { contents: '{' } }).text, 'invalid request')
  assert.equal(doPost({ postData: { contents: JSON.stringify({ site: 'https://other.example', ip: '1.2.3.4' }) } }).text, 'invalid site')
  assert.equal(rows.length, 0)
})
