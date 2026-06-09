"use client"

import { useMemo, useState } from "react"
import Image from "next/image"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { BookCard } from "@/components/books/book-card"
import { cn } from "@/lib/utils"
import {
  BookOpen,
  Bookmark,
  CheckCircle2,
  Star,
  Upload,
  Plus,
  Library,
  Search,
} from "lucide-react"

const sidebarItems = [
  { name: "All Books", icon: Library },
  { name: "Reading Now", icon: BookOpen },
  { name: "Want to Read", icon: Bookmark },
  { name: "Finished", icon: CheckCircle2 },
  { name: "Favorites", icon: Star },
]

const shelfBooks = [
  {
    id: "1",
    title: "The Architecture of Quiet",
    author: "Evelyn Reed",
    coverImage: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&q=80",
    genre: "Non-Fiction",
    status: "Reading Now",
    favorite: true,
    progress: { percentage: 64, currentPage: 182, totalPages: 284 },
  },
  {
    id: "2",
    title: "Meditations on Form",
    author: "Marcus Aurelius",
    coverImage: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=300&q=80",
    genre: "Philosophy",
    status: "Want to Read",
    favorite: false,
    progress: { percentage: 22, currentPage: 45, totalPages: 210 },
  },
  {
    id: "3",
    title: "The Distance Between",
    author: "Sarah Jenkins",
    coverImage: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=300&q=80",
    genre: "Fiction",
    status: "Finished",
    favorite: true,
    progress: { percentage: 89, currentPage: 312, totalPages: 350 },
  },
  {
    id: "4",
    title: "Deep Time",
    author: "Dr. Aris Thorne",
    coverImage: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=300&q=80",
    genre: "Science",
    status: "Reading Now",
    favorite: false,
    progress: { percentage: 5, currentPage: 20, totalPages: 415 },
  },
]

function getShelfDescription(filter: string) {
  switch (filter) {
    case "Reading Now":
      return "Books you are currently reading."
    case "Want to Read":
      return "Titles saved for later."
    case "Finished":
      return "Books you have already completed."
    case "Favorites":
      return "Your most valued titles."
    default:
      return "Your complete shelf collection."
  }
}

export default function ShelfPage() {
  const [activeFilter, setActiveFilter] = useState("Reading Now")
  const [searchTerm, setSearchTerm] = useState("")

  const filteredBooks = useMemo(() => {
    let books = [...shelfBooks]

    if (activeFilter !== "All Books") {
      if (activeFilter === "Favorites") {
        books = books.filter((book) => book.favorite)
      } else {
        books = books.filter((book) => book.status === activeFilter)
      }
    }

    if (searchTerm.trim()) {
      const term = searchTerm.toLowerCase()
      books = books.filter(
        (book) =>
          book.title.toLowerCase().includes(term) ||
          book.author.toLowerCase().includes(term) ||
          book.genre.toLowerCase().includes(term)
      )
    }

    return books
  }, [activeFilter, searchTerm])

  const handleAddBook = () => {
    alert("Add New Book is not connected to a database yet.")
  }

  const handleImportBook = () => {
    alert("Import is not implemented yet. This is a click-through prototype.")
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-8 lg:flex-row">
            {/* Sidebar */}
            <aside className="w-full lg:w-64">
              {/* User Profile */}
              <div className="mb-6 flex items-center gap-3">
                <div className="relative h-12 w-12 overflow-hidden rounded-full bg-muted">
                  <Image
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80"
                    alt="Alexander"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Alexander</p>
                  <p className="text-sm text-muted-foreground">My Collections</p>
                </div>
              </div>

              {/* Filter Navigation */}
              <nav className="space-y-1">
                {sidebarItems.map((item) => {
                  const Icon = item.icon
                  return (
                    <button
                      key={item.name}
                      type="button"
                      onClick={() => setActiveFilter(item.name)}
                      className={cn(
                        "flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                        activeFilter === item.name
                          ? "border-l-4 border-primary bg-secondary text-foreground"
                          : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                      )}
                    >
                      <Icon className="h-5 w-5" />
                      {item.name}
                    </button>
                  )
                })}
              </nav>

              {/* Add New Book Button */}
              <button
                type="button"
                onClick={handleAddBook}
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg border-2 border-dashed border-primary py-3 text-sm font-medium text-primary transition-colors hover:bg-primary/5"
              >
                <Plus className="h-4 w-4" />
                Add New Book
              </button>
            </aside>

            {/* Main Content */}
            <div className="flex-1">
              {/* Content Header */}
              <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h1 className="text-2xl font-bold text-foreground">{activeFilter}</h1>
                  <p className="text-sm text-muted-foreground">
                    {getShelfDescription(activeFilter)}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={handleImportBook}
                  className="flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
                >
                  <Upload className="h-4 w-4" />
                  Import TXT, PDF, EPUB
                </button>
              </div>

              {/* Search Bar */}
              <div className="mb-6">
                <div className="relative max-w-md">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Search by title, author, or genre..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full rounded-lg border border-border bg-card py-2 pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
              </div>

              {/* Books Grid */}
              {filteredBooks.length > 0 ? (
                <div className="grid gap-6 md:grid-cols-2">
                  {filteredBooks.map((book) => (
                    <BookCard
                      key={book.id}
                      id={book.id}
                      title={book.title}
                      author={book.author}
                      coverImage={book.coverImage}
                      genre={book.genre}
                      progress={book.progress}
                      variant="shelf"
                    />
                  ))}
                </div>
              ) : (
                <div className="rounded-xl border border-border bg-card p-8 text-center">
                  <h2 className="mb-2 text-lg font-semibold text-foreground">
                    No books found
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    Try changing the filter or search phrase.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
