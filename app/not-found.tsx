import Link from "next/link"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex flex-1 items-center justify-center px-4 py-16">
        <div className="w-full max-w-2xl rounded-2xl border border-border bg-card p-10 text-center shadow-sm">
          <p className="mb-3 text-sm font-medium uppercase tracking-wider text-primary">
            Error 404
          </p>

          <h1 className="mb-4 text-4xl font-bold text-foreground sm:text-5xl">
            Page not found
          </h1>

          <p className="mx-auto mb-8 max-w-xl text-base text-muted-foreground sm:text-lg">
            The page you are looking for does not exist or may have been moved.
            Use the links below to return to a valid section of the application.
          </p>

          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/"
              className="rounded-lg bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Go to Discover
            </Link>

            <Link
              href="/shelf"
              className="rounded-lg border border-border px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
            >
              Go to Shelf
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
