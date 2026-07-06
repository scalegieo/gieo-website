import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] flex-col items-center justify-center bg-background px-5 pt-20 text-center">
      <p className="label-caps text-muted-foreground">404</p>
      <h1 className="mt-4 font-heading text-4xl italic md:text-5xl">Page not found</h1>
      <p className="mt-4 max-w-md text-sm text-muted-foreground">
        The page you are looking for does not exist or may have moved.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Link
          href="/"
          data-cursor="hover"
          className="label-caps text-foreground transition-opacity hover:opacity-60"
        >
          Back to Home ↗
        </Link>
        <Link
          href="/contact"
          data-cursor="hover"
          className="label-caps text-gold transition-opacity hover:opacity-60"
        >
          Contact Us ↗
        </Link>
      </div>
    </main>
  )
}
