const NEWSLETTER_SHEET_ID = '1QfrUaChxU5h1mnq8EceZkyrTOBTjgCmFgGF34agigbs'

export const NEWSLETTER_SHEET_DEPLOYMENT_ID =
  'AKfycbwOQ1Cy3LwQAwJQjKG0COO9qd9pdRVNcqIsQu_08TKPS3N829XLZYp1_4LsxKUCMZdhWA'

export const NEWSLETTER_SHEET_WEBHOOK_URL =
  'https://script.google.com/macros/s/AKfycbwOQ1Cy3LwQAwJQjKG0COO9qd9pdRVNcqIsQu_08TKPS3N829XLZYp1_4LsxKUCMZdhWA/exec'

export { NEWSLETTER_SHEET_ID }

type SheetResponse = { ok?: boolean; error?: string }

/** Append a validated email row via deployed Google Apps Script web app. */
export async function appendNewsletterToSheet(email: string): Promise<boolean> {
  try {
    const res = await fetch(NEWSLETTER_SHEET_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email,
        sheetId: NEWSLETTER_SHEET_ID,
        source: 'gieo-website',
        subscribedAt: new Date().toISOString(),
      }),
      cache: 'no-store',
    })

    const data = (await res.json().catch(() => ({}))) as SheetResponse

    if (!res.ok || data.ok === false) {
      console.error('[newsletter-sheet]', data.error ?? res.statusText)
      return false
    }

    return true
  } catch (err) {
    console.error('[newsletter-sheet]', err)
    return false
  }
}
