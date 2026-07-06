import { cn } from '@/lib/utils'

/**
 * The GIEO symbol — the ring + bar that forms the "O" in the wordmark.
 * Uses currentColor so it adapts to any surface.
 */
export function GieoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 120"
      fill="none"
      aria-hidden="true"
      className={cn('block', className)}
    >
      <circle cx="50" cy="40" r="31" stroke="currentColor" strokeWidth="17" />
      <rect x="22" y="92" width="56" height="18" fill="currentColor" />
    </svg>
  )
}
