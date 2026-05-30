"use client"

import { useState } from "react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { cn } from "@/lib/utils"
import { ChevronDown } from "lucide-react"

const sections = [
  { id: "about", name: "About Us" },
  { id: "faq", name: "FAQ" },
  { id: "support", name: "Contact Support" },
]

const faqs = [
  {
    id: "1",
    question: "How do I import my existing book collection?",
    answer: "You can easily import your collection using our CSV upload tool available in your Account Settings. We support standard formats from most major cataloging platforms.",
  },
  {
    id: "2",
    question: "Is there a limit to how many books I can add?",
    answer: "Free accounts can add up to 500 books. Premium accounts have unlimited book storage and additional features like cloud sync and advanced organization tools.",
  },
  {
    id: "3",
    question: "Can I share my shelf with others?",
    answer: "Yes! You can create public reading lists and share them via a unique link. You can also follow other readers and see their recommendations.",
  },
  {
    id: "4",
    question: "What file formats does the reader support?",
    answer: "Our reader supports EPUB, PDF, and TXT formats. We also offer automatic format conversion for most common e-book formats.",
  },
]

export default function InfoPage() {
  const [activeSection, setActiveSection] = useState("about")
  const [openFaq, setOpenFaq] = useState<string | null>("1")

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Page Header */}
        <section className="border-b border-border bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <h1 className="mb-2 text-3xl font-bold text-foreground sm:text-4xl">
              Information & Resources
            </h1>
            <p className="text-lg text-muted-foreground">
              Everything you need to know about navigating and utilizing the Lumina Library ecosystem effectively.
            </p>
          </div>
        </section>

        {/* Content */}
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-4">
            {/* Sidebar Navigation */}
            <aside className="lg:col-span-1">
              <div className="rounded-xl border border-border bg-card p-4">
                <h2 className="mb-4 text-sm font-semibold text-foreground">Sections</h2>
                <nav className="space-y-1">
                  {sections.map((section) => (
                    <button
                      key={section.id}
                      type="button"
                      onClick={() => setActiveSection(section.id)}
                      className={cn(
                        "w-full rounded-lg px-3 py-2 text-left text-sm font-medium transition-colors",
                        activeSection === section.id
                          ? "border-l-4 border-primary bg-muted text-foreground"
                          : "text-muted-foreground hover:bg-muted hover:text-foreground"
                      )}
                    >
                      {section.name}
                    </button>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* About Section */}
              <section className="mb-12">
                <h2 className="mb-6 text-2xl font-bold text-foreground">About Lumina Library</h2>
                <div className="rounded-xl border border-border bg-card p-6">
                  <p className="mb-4 leading-relaxed text-muted-foreground">
                    Lumina Library was founded on the principle of &quot;Digital Quietude.&quot; In an era of constant notifications and cluttered interfaces, we provide a serene, organized space for avid readers, researchers, and collectors to curate their digital shelves.
                  </p>
                  <p className="leading-relaxed text-muted-foreground">
                    Our platform is designed to recede into the background, allowing the cover art and literary content to remain the primary focus. We believe that managing your digital collection should be as peaceful as walking through a physical library.
                  </p>
                </div>
              </section>

              {/* FAQ Section */}
              <section>
                <h2 className="mb-6 text-2xl font-bold text-foreground">Frequently Asked Questions</h2>
                <div className="space-y-3">
                  {faqs.map((faq) => (
                    <div
                      key={faq.id}
                      className="rounded-xl border border-border bg-card"
                    >
                      <button
                        type="button"
                        onClick={() => setOpenFaq(openFaq === faq.id ? null : faq.id)}
                        className="flex w-full items-center justify-between p-4 text-left"
                      >
                        <span className="font-medium text-foreground">{faq.question}</span>
                        <ChevronDown
                          className={cn(
                            "h-5 w-5 text-muted-foreground transition-transform",
                            openFaq === faq.id && "rotate-180"
                          )}
                        />
                      </button>
                      {openFaq === faq.id && (
                        <div className="border-t border-border px-4 pb-4 pt-3">
                          <p className="leading-relaxed text-muted-foreground">{faq.answer}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
