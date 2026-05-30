import Image from "next/image"
import Link from "next/link"
import { Search, ArrowRight, ChevronRight } from "lucide-react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { BookCard } from "@/components/books/book-card"

const genres = [
  "Fantasy",
  "Romance",
  "Science Fiction",
  "Historical",
  "Non-Fiction",
  "Mystery",
]

const recommendedBooks = [
  {
    id: "1",
    title: "The Silent Constellation",
    author: "Aria Vance",
    coverImage: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&q=80",
  },
  {
    id: "2",
    title: "Echoes in Amber",
    author: "Julian Thorne",
    coverImage: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400&q=80",
  },
  {
    id: "3",
    title: "Currents of Time",
    author: "Elena Rostova",
    coverImage: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=400&q=80",
  },
]

export default function DiscoverPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-muted/50">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
            <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
              <div>
                <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                  Virtual shelf for readers
                </h1>
                <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
                  Experience digital quietude. Organize your collections, discover new narratives, and immerse yourself in a distraction-free reading environment designed for true bibliophiles.
                </p>
                <Link
                  href="/shelf"
                  className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-base font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  Browse books
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
              
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800&q=80"
                  alt="Beautiful library with wooden bookshelves"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Search Section */}
        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search titles, authors, or ISBNs..."
                className="w-full rounded-xl border border-border bg-card py-4 pl-12 pr-4 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <span className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
              Genres:
            </span>
            {genres.map((genre) => (
              <button
                key={genre}
                type="button"
                className="rounded-full border border-border px-4 py-1.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
              >
                {genre}
              </button>
            ))}
          </div>
        </section>

        {/* Recommended Section */}
        <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-foreground">Recommended</h2>
            <Link
              href="/rankings"
              className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              View all
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
          
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {recommendedBooks.map((book) => (
              <BookCard
                key={book.id}
                id={book.id}
                title={book.title}
                author={book.author}
                coverImage={book.coverImage}
                variant="discover"
              />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
