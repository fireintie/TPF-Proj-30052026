"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"
import {
  ArrowLeft,
  Bookmark,
  Search,
  Sun,
  Moon,
  Minus,
  Plus,
  AlignLeft,
  AlignCenter,
  AlignJustify,
} from "lucide-react"

const tableOfContents = [
  { id: "1", chapter: "I", title: "Significance of Architecture" },
  { id: "2", chapter: "II", title: "In What Style Shall We Build?" },
  { id: "3", chapter: "III", title: "Talking Buildings" },
  {
    id: "4",
    chapter: "IV",
    title: "The Significance of Home",
    subchapters: [
      "The Idea of a Home",
      "Memory and Space",
      "The Need for Refuge",
    ],
  },
  { id: "5", chapter: "V", title: "Ideals of Beauty" },
  { id: "6", chapter: "VI", title: "The Virtues of Buildings" },
]

export default function ReaderPage() {
  const [fontSize, setFontSize] = useState(18)
  const [fontType, setFontType] = useState<"sans" | "serif">("sans")
  const [background, setBackground] = useState<"light" | "warm" | "dark">("light")
  const [spacing, setSpacing] = useState<"compact" | "normal" | "relaxed">("normal")
  const [activeChapter, setActiveChapter] = useState("4")

  const bgStyles = {
    light: "bg-white text-foreground",
    warm: "bg-amber-50 text-foreground",
    dark: "bg-zinc-900 text-zinc-100",
  }

  return (
    <div className={cn("min-h-screen", bgStyles[background])}>
      {/* Top Navigation */}
      <header className="sticky top-0 z-50 border-b border-border bg-inherit">
        <div className="flex h-14 items-center justify-between px-4">
          <Link
            href="/shelf"
            className="flex items-center gap-2 rounded-lg border border-primary px-3 py-1.5 text-sm font-medium text-primary transition-colors hover:bg-primary/5"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Shelf
          </Link>

          <div className="text-center">
            <h1 className="text-sm font-semibold">The Architecture of Happiness</h1>
            <p className="text-xs text-muted-foreground">Chapter 12: The Significance of Home</p>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>68% read</span>
              <div className="h-1.5 w-24 overflow-hidden rounded-full bg-muted">
                <div className="h-full w-[68%] rounded-full bg-primary" />
              </div>
            </div>
            <button type="button" className="text-muted-foreground hover:text-foreground" aria-label="Bookmark">
              <Bookmark className="h-5 w-5" />
            </button>
            <button type="button" className="text-muted-foreground hover:text-foreground" aria-label="Search">
              <Search className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Table of Contents Sidebar */}
        <aside className="hidden w-72 flex-shrink-0 border-r border-border p-6 lg:block">
          <h2 className="mb-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Table of Contents
          </h2>
          <nav className="space-y-1">
            {tableOfContents.map((item) => (
              <div key={item.id}>
                <button
                  type="button"
                  onClick={() => setActiveChapter(item.id)}
                  className={cn(
                    "flex w-full items-start gap-3 rounded-lg px-3 py-2 text-left text-sm transition-colors",
                    activeChapter === item.id
                      ? "border-l-4 border-primary bg-primary/5 font-medium text-foreground"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  )}
                >
                  <span className="w-4 text-muted-foreground">{item.chapter}</span>
                  <span>{item.title}</span>
                </button>
                {item.subchapters && activeChapter === item.id && (
                  <div className="ml-7 mt-1 space-y-1 border-l border-border pl-3">
                    {item.subchapters.map((sub) => (
                      <button
                        key={sub}
                        type="button"
                        className="block w-full py-1 text-left text-sm text-muted-foreground hover:text-foreground"
                      >
                        {sub}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </aside>

        {/* Main Reading Area */}
        <main className="flex-1 px-4 py-8 lg:px-12">
          <article
            className={cn(
              "mx-auto max-w-2xl",
              fontType === "serif" ? "font-serif" : "font-sans",
              spacing === "compact" && "leading-snug",
              spacing === "normal" && "leading-relaxed",
              spacing === "relaxed" && "leading-loose"
            )}
            style={{ fontSize: `${fontSize}px` }}
          >
            <div className="mb-8 text-center">
              <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
                Chapter IV
              </p>
              <h1 className="text-3xl font-bold">The Significance of Home</h1>
            </div>

            <p className="mb-6">
              We need our rooms to align us to desirable versions of ourselves and to keep alive the important, evanescent sides of us. We are highly vulnerable to the moods dictated by our surroundings; our sense of self is a notoriously two-way street. We are not always exactly who we wish we were. We carry within us a range of possibilities, some of which are coaxed into life only under certain architectural conditions.
            </p>

            <p className="mb-6">
              The desire to build is intimately bound up with the desire to settle down. A house is a physical manifestation of a psychological state. To design a house is to construct a physical vessel for an abstract concept of home. The materials we choose—the weight of stone, the warmth of timber, the transparency of glass—all speak to the kind of life we hope to lead within those walls.
            </p>

            <div className="my-8 overflow-hidden rounded-xl">
              <Image
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80"
                alt="Modern interior with minimalist design"
                width={800}
                height={500}
                className="w-full object-cover"
              />
            </div>

            <p className="mb-6">
              Consider the threshold, for example. It is not merely a physical barrier between inside and out; it is a psychological transition. The act of crossing a threshold marks a shift in our mental state, a movement from the public to the private, from exposure to shelter.
            </p>

            <p className="mb-6">
              The rooms we inhabit shape our thoughts and feelings in ways both subtle and profound. A well-designed space can elevate our spirits, encourage contemplation, or inspire creativity. Conversely, poorly conceived environments can drain our energy, provoke anxiety, or foster isolation.
            </p>
          </article>
        </main>

        {/* Appearance Settings Sidebar */}
        <aside className="hidden w-72 flex-shrink-0 border-l border-border p-6 xl:block">
          <h2 className="mb-6 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Appearance
          </h2>

          {/* Text Size */}
          <div className="mb-6">
            <label className="mb-3 block text-sm font-medium">Text Size</label>
            <div className="flex items-center justify-between rounded-lg border border-border">
              <button
                type="button"
                onClick={() => setFontSize(Math.max(12, fontSize - 2))}
                className="p-3 text-muted-foreground hover:text-foreground"
                aria-label="Decrease font size"
              >
                <span className="text-lg">A-</span>
              </button>
              <span className="text-sm">{fontSize}px</span>
              <button
                type="button"
                onClick={() => setFontSize(Math.min(28, fontSize + 2))}
                className="p-3 text-muted-foreground hover:text-foreground"
                aria-label="Increase font size"
              >
                <span className="text-lg">A+</span>
              </button>
            </div>
          </div>

          {/* Typography */}
          <div className="mb-6">
            <label className="mb-3 block text-sm font-medium">Typography</label>
            <div className="space-y-2">
              <button
                type="button"
                onClick={() => setFontType("sans")}
                className={cn(
                  "w-full rounded-lg border px-4 py-2 text-left text-sm transition-colors",
                  fontType === "sans"
                    ? "border-primary bg-primary/5 text-foreground"
                    : "border-border text-muted-foreground hover:border-primary"
                )}
              >
                Sans Serif {fontType === "sans" && "✓"}
              </button>
              <button
                type="button"
                onClick={() => setFontType("serif")}
                className={cn(
                  "w-full rounded-lg border px-4 py-2 text-left font-serif text-sm transition-colors",
                  fontType === "serif"
                    ? "border-primary bg-primary/5 text-foreground"
                    : "border-border text-muted-foreground hover:border-primary"
                )}
              >
                Serif
              </button>
            </div>
          </div>

          {/* Background */}
          <div className="mb-6">
            <label className="mb-3 block text-sm font-medium">Background</label>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setBackground("light")}
                className={cn(
                  "flex flex-1 flex-col items-center gap-1 rounded-lg border p-3 transition-colors",
                  background === "light"
                    ? "border-primary bg-primary/5"
                    : "border-border hover:border-primary"
                )}
                aria-label="Light mode"
              >
                <Sun className="h-5 w-5" />
                <span className="text-xs">Light</span>
              </button>
              <button
                type="button"
                onClick={() => setBackground("warm")}
                className={cn(
                  "flex flex-1 flex-col items-center gap-1 rounded-lg border p-3 transition-colors",
                  background === "warm"
                    ? "border-primary bg-primary/5"
                    : "border-border hover:border-primary"
                )}
                aria-label="Warm mode"
              >
                <Sun className="h-5 w-5 text-amber-500" />
                <span className="text-xs">Warm</span>
              </button>
              <button
                type="button"
                onClick={() => setBackground("dark")}
                className={cn(
                  "flex flex-1 flex-col items-center gap-1 rounded-lg border p-3 transition-colors",
                  background === "dark"
                    ? "border-primary bg-primary/5"
                    : "border-border hover:border-primary"
                )}
                aria-label="Dark mode"
              >
                <Moon className="h-5 w-5" />
                <span className="text-xs">Dark</span>
              </button>
            </div>
          </div>

          {/* Spacing */}
          <div>
            <label className="mb-3 block text-sm font-medium">Spacing</label>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setSpacing("compact")}
                className={cn(
                  "flex flex-1 items-center justify-center rounded-lg border p-3 transition-colors",
                  spacing === "compact"
                    ? "border-primary bg-primary/5"
                    : "border-border hover:border-primary"
                )}
                aria-label="Compact spacing"
              >
                <AlignLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={() => setSpacing("normal")}
                className={cn(
                  "flex flex-1 items-center justify-center rounded-lg border border-primary p-3 transition-colors",
                  spacing === "normal"
                    ? "border-primary bg-primary/5"
                    : "border-border hover:border-primary"
                )}
                aria-label="Normal spacing"
              >
                <AlignCenter className="h-5 w-5 text-primary" />
              </button>
              <button
                type="button"
                onClick={() => setSpacing("relaxed")}
                className={cn(
                  "flex flex-1 items-center justify-center rounded-lg border p-3 transition-colors",
                  spacing === "relaxed"
                    ? "border-primary bg-primary/5"
                    : "border-border hover:border-primary"
                )}
                aria-label="Relaxed spacing"
              >
                <AlignJustify className="h-5 w-5" />
              </button>
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}
