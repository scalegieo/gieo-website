'use client'

import { useState, type FormEvent } from 'react'
import { cn } from '@/lib/utils'

type NewsletterFormProps = {
  variant?: 'light' | 'dark'
  className?: string
  inputClassName?: string
  buttonClassName?: string
  successMessage?: string
}

export function NewsletterForm({
  variant = 'dark',
  className,
  inputClassName,
  buttonClassName,
  successMessage = "You're on the list.",
}: NewsletterFormProps) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [error, setError] = useState('')

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setStatus('loading')
    setError('')

    const trimmed = email.trim().toLowerCase()
    if (!trimmed || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      setStatus('error')
      setError('Please enter a valid email address.')
      return
    }

    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: trimmed }),
      })
      const data = await res.json()

      if (!res.ok || !data.ok) {
        throw new Error(data.error || 'Something went wrong. Please try again.')
      }

      setStatus('success')
      setEmail('')
    } catch (err) {
      setStatus('error')
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
    }
  }

  if (status === 'success') {
    return <p className={cn('text-sm', variant === 'dark' ? 'text-primary-foreground/70' : 'text-gold')}>{successMessage}</p>
  }

  return (
    <div className={className}>
      <form onSubmit={handleSubmit} className={cn('flex gap-2', variant === 'light' && 'flex-col sm:flex-row')}>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={status === 'loading'}
          placeholder="Email"
          className={cn(
            'border-b bg-transparent py-2 text-sm outline-none disabled:opacity-50',
            variant === 'dark'
              ? 'border-white/20 text-primary-foreground placeholder:text-primary-foreground/30 focus:border-white/50'
              : 'border-border text-foreground placeholder:text-muted-foreground focus:border-gold',
            inputClassName,
          )}
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          data-cursor="hover"
          className={cn(
            'label-caps shrink-0 transition-colors disabled:opacity-50',
            variant === 'dark'
              ? 'text-primary-foreground/60 hover:text-primary-foreground'
              : 'bg-gold px-6 py-3 text-[11px] font-medium uppercase tracking-[0.18em] text-accent-foreground hover:bg-gold-hover',
            buttonClassName,
          )}
        >
          {status === 'loading' ? '…' : variant === 'dark' ? 'Join ↗' : 'Subscribe'}
        </button>
      </form>
      {status === 'error' && (
        <p className={cn('mt-2 text-xs', variant === 'dark' ? 'text-red-300' : 'text-red-600')}>{error}</p>
      )}
    </div>
  )
}
