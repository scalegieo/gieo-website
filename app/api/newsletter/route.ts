import { forwardToWebhook, isValidEmail, jsonError, jsonOk } from '@/lib/api-utils'
import { appendNewsletterToSheet } from '@/lib/newsletter-sheet'

export async function POST(request: Request) {
  let body: { email?: string }

  try {
    body = await request.json()
  } catch {
    return jsonError('Invalid request body')
  }

  const email = body.email?.trim().toLowerCase()

  if (!email || !isValidEmail(email)) {
    return jsonError('Please enter a valid email address')
  }

  const submission = { type: 'newsletter', email }

  const savedToSheet = await appendNewsletterToSheet(email)

  if (!savedToSheet) {
    return jsonError('Could not save your email right now. Please try again in a moment.')
  }

  await forwardToWebhook(submission, 'NEWSLETTER_WEBHOOK_URL')

  return jsonOk({ message: 'You are on the list.' })
}
