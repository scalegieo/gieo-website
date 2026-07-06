'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { cn } from '@/lib/utils'
import { getBookCallPath, scheduleBookCallScroll } from '@/lib/book-call'

type BookCallLinkProps = React.ComponentPropsWithoutRef<'a'> & {
  children: React.ReactNode
  className?: string
}

export function BookCallLink({ children, className, onClick, ...props }: BookCallLinkProps) {
  const pathname = usePathname()
  const router = useRouter()
  const href = getBookCallPath(pathname)

  function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
    onClick?.(e)

    if (pathname === '/' || pathname === '/contact') {
      e.preventDefault()
      window.history.replaceState(null, '', href)
      scheduleBookCallScroll()
    } else if (href.startsWith('/#')) {
      e.preventDefault()
      router.push(href)
      setTimeout(() => scheduleBookCallScroll(), 200)
    }
  }

  return (
    <Link
      href={href}
      onClick={handleClick}
      data-cursor="hover"
      className={cn(className)}
      {...props}
    >
      {children}
    </Link>
  )
}
