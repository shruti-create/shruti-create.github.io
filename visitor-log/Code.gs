/**
 * @OnlyCurrentDoc
 */
// Create this script from Extensions > Apps Script inside the private visitor log spreadsheet.
const VISITS_TAB = 'Visits'
const SITE_ORIGIN = 'https://shruti-create.github.io'

function doPost(e) {
  let visit
  try {
    if (!e || !e.postData || e.postData.contents.length > 2048) return reply_('invalid request')
    visit = JSON.parse(e.postData.contents)
  } catch (_) {
    return reply_('invalid request')
  }

  if (!visit || typeof visit !== 'object' || visit.site !== SITE_ORIGIN) return reply_('invalid site')
  const ip = String(visit.ip || '').trim()
  if (!/^[0-9a-fA-F:.]{3,45}$/.test(ip)) return reply_('invalid IP')

  const page = String(visit.page || '/').slice(0, 256)
  if (!page.startsWith('/') || page.startsWith('//')) return reply_('invalid page')

  const lock = LockService.getScriptLock()
  lock.waitLock(10000)
  try {
    const spreadsheet = SpreadsheetApp.getActiveSpreadsheet()
    if (!spreadsheet) throw new Error('Create this script from inside the visitor log spreadsheet')

    let sheet = spreadsheet.getSheetByName(VISITS_TAB)
    if (!sheet) sheet = spreadsheet.insertSheet(VISITS_TAB)
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(['Visited at (UTC)', 'IP address', 'City (approx.)', 'Region (approx.)', 'Country', 'Page'])
      sheet.setFrozenRows(1)
      sheet.getRange(1, 1, 1, 6).setBackground('#7b2942').setFontColor('#ffffff').setFontWeight('bold')
    }

    sheet.appendRow([
      new Date().toISOString(),
      ip,
      safeText_(visit.city, 100),
      safeText_(visit.region, 100),
      safeText_(visit.country, 100),
      safeText_(page, 256),
    ])
    SpreadsheetApp.flush()
    return reply_('ok')
  } finally {
    lock.releaseLock()
  }
}

function safeText_(value, maxLength) {
  const text = String(value || '').replace(/[\r\n\t]/g, ' ').trim().slice(0, maxLength)
  return /^[=+\-@]/.test(text) ? "'" + text : text
}

function reply_(message) {
  return ContentService.createTextOutput(message)
}
