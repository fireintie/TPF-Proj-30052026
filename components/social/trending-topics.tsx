interface TrendingTopicsProps {
  topics: string[]
}

export function TrendingTopics({ topics }: TrendingTopicsProps) {
  return (
    <div className="rounded-xl border border-border bg-card p-6">
      <h2 className="mb-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        Trending Topics
      </h2>
      <div className="flex flex-wrap gap-2">
        {topics.map((topic) => (
          <button
            key={topic}
            type="button"
            className="rounded-full border border-border px-3 py-1.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
          >
            #{topic}
          </button>
        ))}
      </div>
    </div>
  )
}
