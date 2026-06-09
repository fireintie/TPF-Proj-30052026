import Link from "next/link"

const footerLinks = [
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Terms of Service", href: "/terms-of-service" },
  { name: "API Docs", href: "/api-docs" },
  { name: "Support", href: "/support" },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <div className="flex h-6 w-6 items-center justify-center rounded bg-primary">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="h-4 w-4 text-primary-foreground"
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
          <span className="text-sm font-medium text-foreground">Lumina Library</span>
        </div>

        <nav className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          {footerLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-xs font-medium uppercase tracking-wider text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <p className="text-xs text-muted-foreground">
          &copy; 2024 Lumina Library. Digital Quietude for Collectors.
        </p>
      </div>
    </footer>
  )
}
