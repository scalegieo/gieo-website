import { NextResponse } from 'next/server'

export function jsonError(message: string, status = 400) {
  return NextResponse.json({ ok: false, error: message }, { status })
}

export function jsonOk(data: Record<string, unknown> = {}) {
  return NextResponse.json({ ok: true, ...data })
}

export function isValidEmail(email: string) {
  if (!email || email.length > 254) return false
  return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/.test(
    email,
  )
}

export async function forwardToWebhook(
  payload: Record<string, unknown>,
  envKey: 'CONTACT_WEBHOOK_URL' | 'NEWSLETTER_WEBHOOK_URL' | 'FORM_WEBHOOK_URL',
) {
  const url =
    process.env[envKey] ||
    (envKey !== 'FORM_WEBHOOK_URL' ? process.env.FORM_WEBHOOK_URL : undefined)

  if (!url) return

  try {
    await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...payload, source: 'gieo-website', timestamp: new Date().toISOString() }),
    })
  } catch (err) {
    console.error(`[webhook:${envKey}]`, err)
  }
}
