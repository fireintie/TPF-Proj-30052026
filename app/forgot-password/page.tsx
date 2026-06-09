"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Mail } from "lucide-react"

export default function ForgotPasswordPage() {
  const router = useRouter()
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!email) {
      alert("Please enter your email.")
      return
    }

    alert("Password reset link sent.")
    router.push("/login")
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted/30 px-4">
      <div className="w-full max-w-md rounded-2xl border border-border bg-card p-8 shadow-lg">
        <div className="mb-6 flex flex-col items-center">
          <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-xl bg-primary">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="h-8 w-8 text-primary-foreground"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
              <path d="M12 6v7" />
              <path d="M8 9h8" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-foreground">Reset password</h1>
          <p className="text-center text-muted-foreground">
            Enter your email and we will send you a reset link
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-foreground">
              Email
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <input
                type="email"
                id="email"
                placeholder="reader@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-lg border border-border bg-input py-3 pl-11 pr-4 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-primary py-3 text-base font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Send reset link
          </button>
        </form>

        <div className="mt-6 border-t border-border pt-6 text-center">
          <p className="text-sm text-muted-foreground">
            Remembered your password?{" "}
            <Link href="/login" className="font-medium text-accent hover:underline">
              Back to login
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
