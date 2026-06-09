import Link from "next/link"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"

export default function ApiDocsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          <h1 className="mb-4 text-3xl font-bold text-foreground">API Docs</h1>
          <p className="mb-6 text-muted-foreground">
            This is a placeholder API documentation page for the prototype.
          </p>

          <div className="space-y-4 rounded-xl border border-border bg-card p-6">
            <p className="text-sm text-foreground">
              No real backend or API is connected in this version.
            </p>
            <p className="text-sm text-muted-foreground">
              In a full implementation, this section could describe endpoints for books,
              authentication, reading progress, and user collections.
            </p>
          </div>

          <div className="mt-8">
            <Link href="/" className="text-sm font-medium text-primary hover:underline">
              Back to home
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
