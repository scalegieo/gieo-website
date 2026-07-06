'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { cn } from '@/lib/utils'
import { ArrowRight } from 'lucide-react'
import { getBookCallPath, scheduleBookCallScroll } from '@/lib/book-call'

type PlusButtonProps = {
  children: React.ReactNode
  href?: string
  variant?: 'solid' | 'outline' | 'ghost'
  className?: string
  external?: boolean
  bookCall?: boolean
}

export function PlusButton({
  children,
  href = '/contact',
  variant = 'solid',
  className,
  external,
  bookCall,
}: PlusButtonProps) {
  const pathname = usePathname()
  const router = useRouter()
  const resolvedHref = bookCall ? getBookCallPath(pathname) : href
  const isExternal =
    !bookCall && (external || href.startsWith('http') || href.startsWith('mailto:'))

  const classNames = cn(
    'group inline-flex items-stretch text-[11px] font-medium uppercase tracking-[0.18em] transition-all duration-300',
    variant === 'solid' && 'text-accent-foreground',
    variant === 'outline' && 'text-foreground',
    variant === 'ghost' && 'text-accent',
    className,
  )

  const content = (
    <>
      <span
        className={cn(
          'flex items-center px-6 py-4 transition-all duration-300',
          variant === 'solid' &&
            'bg-accent text-accent-foreground group-hover:bg-gold-hover group-hover:gold-glow-sm',
          variant === 'outline' &&
            'border border-border text-foreground group-hover:border-accent group-hover:text-accent',
          variant === 'ghost' &&
            'text-accent group-hover:text-gold-hover',
        )}
      >
        {children}
      </span>
      <span
        className={cn(
          'flex w-11 items-center justify-center transition-all duration-300',
          variant === 'solid' &&
            'border-y border-r border-accent/40 text-accent group-hover:border-gold-hover group-hover:bg-gold-hover group-hover:text-accent-foreground',
          variant === 'outline' &&
            'border border-l-0 border-border group-hover:border-accent group-hover:text-accent',
          variant === 'ghost' &&
            'text-accent group-hover:text-gold-hover',
        )}
        aria-hidden="true"
      >
        <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
      </span>
    </>
  )

  function handleBookCallClick(e: React.MouseEvent<HTMLAnchorElement>) {
    if (pathname === '/' || pathname === '/contact') {
      e.preventDefault()
      window.history.replaceState(null, '', resolvedHref)
      scheduleBookCallScroll()
    } else if (resolvedHref.startsWith('/#')) {
      e.preventDefault()
      router.push(resolvedHref)
      setTimeout(() => scheduleBookCallScroll(), 200)
    }
  }

  if (isExternal) {
    return (
      <a
        href={href}
        target={href.startsWith('mailto:') ? undefined : '_blank'}
        rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
        data-cursor="hover"
        className={classNames}
      >
        {content}
      </a>
    )
  }

  return (
    <Link
      href={resolvedHref}
      onClick={bookCall ? handleBookCallClick : undefined}
      data-cursor="hover"
      className={classNames}
    >
      {content}
    </Link>
  )
}
