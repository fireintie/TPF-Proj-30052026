import Image from "next/image"
import { Star } from "lucide-react"

interface RankingBookItemProps {
  rank: number
  title: string
  author: string
  coverImage: string
  rating: number
  shelfCount: string
  tags: string[]
}

export function RankingBookItem({
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
      
      <div className="relative h-24 w-16 flex-shrink-0 overflow-hidden rounded-lg bg-muted">
        <Image
          src={coverImage}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      
      <div className="flex-1">
        <h3 className="mb-1 text-lg font-semibold text-foreground">{title}</h3>
        <p className="mb-2 text-sm text-muted-foreground">{author}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded border border-border px-2 py-0.5 text-xs font-medium text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
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
