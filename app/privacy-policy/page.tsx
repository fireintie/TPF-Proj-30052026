import Link from "next/link"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"

export default function PrivacyPolicyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          <h1 className="mb-4 text-3xl font-bold text-foreground">Privacy Policy</h1>
          <p className="mb-6 text-muted-foreground">
            This is a prototype privacy policy page for the click-through version of the app.
          </p>

          <div className="space-y-4 rounded-xl border border-border bg-card p-6">
            <p className="text-sm text-foreground">
              Lumina Library does not currently store real user data in this prototype.
            </p>
            <p className="text-sm text-muted-foreground">
              In a production version, this page would describe how personal information,
              imported books, reading progress, and account details are handled.
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
