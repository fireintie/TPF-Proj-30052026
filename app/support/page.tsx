import Link from "next/link"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"

export default function SupportPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          <h1 className="mb-4 text-3xl font-bold text-foreground">Support</h1>
          <p className="mb-6 text-muted-foreground">
            This is a support page for the prototype version of Lumina Library.
          </p>

          <div className="space-y-4 rounded-xl border border-border bg-card p-6">
            <p className="text-sm text-foreground">
              Need help? In the production version, users could contact support,
              report import issues, or ask about reading progress and account access.
            </p>
            <p className="text-sm text-muted-foreground">
              For now, this page is included so the prototype remains fully clickable.
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
