'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { getBookCallPath, navigateToBookCall } from '@/lib/book-call'

type BookCallLinkProps = React.ComponentPropsWithoutRef<'a'> & {
  children: React.ReactNode
  className?: string
}

export function BookCallLink({ children, className, onClick, ...props }: BookCallLinkProps) {
  const pathname = usePathname()
  const href = getBookCallPath(pathname)

  function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
    onClick?.(e)
    e.preventDefault()
    navigateToBookCall(pathname)
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
