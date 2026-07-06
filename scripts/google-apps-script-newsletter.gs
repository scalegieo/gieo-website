/**
 * GIEO Newsletter → Google Sheet
 *
 * SETUP (one time, ~2 minutes):
 * 1. Open your sheet:
 *    https://docs.google.com/spreadsheets/d/1QfrUaChxU5h1mnq8EceZkyrTOBTjgCmFgGF34agigbs/edit
 * 2. Extensions → Apps Script
 * 3. Replace all code with this file, Save
 * 4. Deploy → New deployment → Web app
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 5. Copy the Web app URL into .env.local:
 *    NEWSLETTER_SHEET_WEBHOOK_URL=https://script.google.com/macros/s/.../exec
 *
 * Optional: add header row in row 1: Email | Subscribed At | Source
 */

const SHEET_ID = '1QfrUaChxU5h1mnq8EceZkyrTOBTjgCmFgGF34agigbs'

function doPost(e) {
  try {
    const body = JSON.parse(e.postData.contents)
    const email = String(body.email || '')
      .trim()
      .toLowerCase()

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return json({ ok: false, error: 'Invalid email' })
    }

    const sheet = SpreadsheetApp.openById(SHEET_ID).getSheets()[0]
    sheet.appendRow([email, body.subscribedAt || new Date().toISOString(), body.source || 'gieo-website'])

    return json({ ok: true })
  } catch (err) {
    return json({ ok: false, error: String(err) })
  }
}

function json(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(
    ContentService.MimeType.JSON,
  )
}
