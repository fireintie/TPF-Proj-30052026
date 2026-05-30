import Image from "next/image"
import { MessageSquare, ThumbsUp, Reply, ArrowRight } from "lucide-react"

interface Opinion {
  id: string
  author: string
  avatar: string
  bookTitle: string
  content: string
  likes: number
}

interface OpinionPanelProps {
  opinions: Opinion[]
}

export function OpinionPanel({ opinions }: OpinionPanelProps) {
  return (
    <div className="rounded-xl border border-border bg-card p-6">
      <div className="mb-6 flex items-center gap-2">
        <MessageSquare className="h-5 w-5 text-primary" />
        <h2 className="text-lg font-semibold text-foreground">Opinion Panel</h2>
      </div>
      
      <div className="space-y-6">
        {opinions.map((opinion) => (
          <div key={opinion.id} className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="relative h-10 w-10 overflow-hidden rounded-full bg-muted">
                <Image
                  src={opinion.avatar}
                  alt={opinion.author}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="font-semibold text-foreground">{opinion.author}</p>
                <p className="text-sm text-muted-foreground">on {opinion.bookTitle}</p>
              </div>
            </div>
            
            <p className="italic text-muted-foreground">{`"${opinion.content}"`}</p>
            
            <div className="flex items-center gap-4">
              <button type="button" className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
                <ThumbsUp className="h-4 w-4" />
                <span>{opinion.likes}</span>
              </button>
              <button type="button" className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
                <Reply className="h-4 w-4" />
                <span>Reply</span>
              </button>
            </div>
          </div>
        ))}
      </div>
      
      <button
        type="button"
        className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg border border-border py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
      >
        View All Discussions
        <ArrowRight className="h-4 w-4" />
      </button>
    </div>
  )
}
