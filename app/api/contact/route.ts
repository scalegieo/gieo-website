import { forwardToWebhook, isValidEmail, jsonError, jsonOk } from '@/lib/api-utils'

type ContactBody = {
  name?: string
  email?: string
  company?: string
  message?: string
  budget?: string
}

export async function POST(request: Request) {
  let body: ContactBody

  try {
    body = await request.json()
  } catch {
    return jsonError('Invalid request body')
  }

  const name = body.name?.trim()
  const email = body.email?.trim().toLowerCase()
  const message = body.message?.trim()
  const company = body.company?.trim() || undefined
  const budget = body.budget?.trim() || undefined

  if (!name || name.length < 2) {
    return jsonError('Please enter your name')
  }

  if (!email || !isValidEmail(email)) {
    return jsonError('Please enter a valid email address')
  }

  if (!message || message.length < 10) {
    return jsonError('Please tell us a bit more about your project')
  }

  const submission = {
    type: 'contact',
    name,
    email,
    company,
    message,
    budget,
  }

  console.info('[contact]', submission)

  await forwardToWebhook(submission, 'CONTACT_WEBHOOK_URL')

  return jsonOk({ message: 'Message received. We will reply within one business day.' })
}
