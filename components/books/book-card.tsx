import Image from "next/image"
import Link from "next/link"

interface BookCardProps {
  id: string
  title: string
  author: string
  coverImage: string
  variant?: "discover" | "shelf"
  genre?: string
  progress?: {
    percentage: number
    currentPage: number
    totalPages: number
  }
}

export function BookCard({
  id,
  title,
  author,
  coverImage,
  variant = "discover",
  genre,
  progress,
}: BookCardProps) {
  if (variant === "shelf" && progress) {
    return (
      <div className="overflow-hidden rounded-xl border border-border bg-card p-4">
        <div className="flex gap-4">
          <div className="relative h-40 w-28 flex-shrink-0 overflow-hidden rounded-lg bg-muted">
            <Image
              src={coverImage}
              alt={title}
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-1 flex-col">
            <div className="mb-2 flex items-start justify-between">
              {genre && (
                <span className="rounded border border-border px-2 py-0.5 text-xs font-medium text-muted-foreground">
                  {genre}
                </span>
              )}
              <button
                type="button"
                className="text-muted-foreground hover:text-foreground"
                aria-label="More options"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="6" r="1.5" />
                  <circle cx="12" cy="12" r="1.5" />
                  <circle cx="12" cy="18" r="1.5" />
                </svg>
              </button>
            </div>
            <h3 className="mb-1 text-base font-semibold text-foreground">{title}</h3>
            <p className="mb-3 text-sm text-muted-foreground">{author}</p>
            <div className="mt-auto">
              <div className="mb-2 flex items-center justify-between text-xs text-muted-foreground">
                <span>{progress.percentage}% completed</span>
                <span>{progress.currentPage} / {progress.totalPages} pages</span>
              </div>
              <div className="mb-3 h-1.5 w-full overflow-hidden rounded-full bg-muted">
                <div
                  className="h-full rounded-full bg-accent"
                  style={{ width: `${progress.percentage}%` }}
                />
              </div>
              <Link
                href={`/reader/${id}`}
                className="block w-full rounded-lg bg-accent py-2.5 text-center text-sm font-medium text-accent-foreground transition-colors hover:bg-accent/90"
              >
                Read
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="group">
      <div className="relative mb-3 aspect-[3/4] overflow-hidden rounded-lg bg-muted">
        <Image
          src={coverImage}
          alt={title}
          fill
          className="object-cover transition-transform group-hover:scale-105"
        />
      </div>
      <h3 className="mb-1 text-base font-semibold text-foreground">{title}</h3>
      <p className="mb-3 text-sm text-muted-foreground">{author}</p>
      <Link
        href={`/reader/${id}`}
        className="inline-block rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
      >
        Read
      </Link>
    </div>
  )
}
