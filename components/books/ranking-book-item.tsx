import Image from "next/image"
import Link from "next/link"
import { Star } from "lucide-react"

interface RankingBookItemProps {
  id: string
  rank: number
  title: string
  author: string
  coverImage: string
  rating: number
  shelfCount: string
  tags: string[]
}

export function RankingBookItem({
  id,
  rank,
  title,
  author,
  coverImage,
  rating,
  shelfCount,
  tags,
}: RankingBookItemProps) {
  return (
    <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-4 transition-shadow hover:shadow-md">
      <span className="text-2xl font-bold text-primary">{rank}</span>

      <Link
        href={`/reader/${id}`}
        className="relative h-24 w-16 flex-shrink-0 overflow-hidden rounded-lg bg-muted"
      >
        <Image
          src={coverImage}
          alt={title}
          fill
          className="object-cover"
        />
      </Link>

      <div className="flex-1">
        <Link href={`/reader/${id}`}>
          <h3 className="mb-1 text-lg font-semibold text-foreground hover:underline">
            {title}
          </h3>
        </Link>

        <p className="mb-2 text-sm text-muted-foreground">{author}</p>

        <div className="mb-3 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded border border-border px-2 py-0.5 text-xs font-medium text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>

        <Link
          href={`/reader/${id}`}
          className="inline-block rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Read
        </Link>
      </div>

      <div className="flex flex-col items-end gap-1 text-right">
        <div className="flex items-center gap-1">
          <Star className="h-4 w-4 fill-primary text-primary" />
          <span className="font-semibold text-primary">{rating}</span>
        </div>
        <span className="text-sm text-muted-foreground">{shelfCount} Shelves</span>
      </div>
    </div>
  )
}
