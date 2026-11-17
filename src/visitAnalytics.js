const endpoint = import.meta.env.VITE_VISITOR_LOG_URL?.trim()
let sentThisPageLoad = false

export async function recordVisit() {
  if (!import.meta.env.PROD || !endpoint || sentThisPageLoad) return
  sentThisPageLoad = true

  try {
    const response = await fetch('https://ipwho.is/?fields=ip,success,city,region,country', {
      cache: 'no-store',
    })
    if (!response.ok) return

    const location = await response.json()
    if (!location.success || typeof location.ip !== 'string') return

    const body = JSON.stringify({
      ip: location.ip,
      city: location.city || '',
      region: location.region || '',
      country: location.country || '',
      page: window.location.pathname + window.location.hash,
      site: window.location.origin,
    })

    if (navigator.sendBeacon?.(endpoint, body)) return
    await fetch(endpoint, { method: 'POST', mode: 'no-cors', body, keepalive: true })
  } catch {
    // Analytics must never interrupt the portfolio.
  }
}
