"use client"

import { useState } from "react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { RankingBookItem } from "@/components/books/ranking-book-item"
import { OpinionPanel } from "@/components/social/opinion-panel"
import { TrendingTopics } from "@/components/social/trending-topics"
import { cn } from "@/lib/utils"

const tabs = ["Power Ranking", "Trending", "Most Popular"]

const rankingBooks = [
  {
    id: "1",
    rank: 1,
    title: "The Architecture of Silence",
    author: "Elias Thorne",
    coverImage: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=200&q=80",
    rating: 4.9,
    shelfCount: "12.4k",
    tags: ["Design", "Theory"],
  },
  {
    id: "2",
    rank: 2,
    title: "Cognitive Landscapes",
    author: "Dr. Aris Vance",
    coverImage: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=200&q=80",
    rating: 4.8,
    shelfCount: "10.1k",
    tags: ["Psychology"],
  },
  {
    id: "3",
    rank: 3,
    title: "Echoes of the Void",
    author: "Mara Lin",
    coverImage: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=200&q=80",
    rating: 4.7,
    shelfCount: "8.5k",
    tags: ["Fiction", "Sci-Fi"],
  },
]

const opinions = [
  {
    id: "1",
    author: "Elena R.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
    bookTitle: "The Architecture of Silence",
    content:
      "A masterclass in structural pacing. Thorne manages to make abstract concepts feel entirely tangible. Essential reading for the collection.",
    likes: 42,
  },
  {
    id: "2",
    author: "Marcus T.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
    bookTitle: "Cognitive Landscapes",
    content:
      "While the premise is fascinating, the middle chapters drag slightly. Still, the concluding arguments are incredibly potent.",
    likes: 18,
  },
]

const trendingTopics = ["Modernism", "FirstEditions", "JapaneseLit", "BookBinding"]

export default function RankingsPage() {
  const [activeTab, setActiveTab] = useState("Power Ranking")

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="mb-2 text-3xl font-bold text-foreground sm:text-4xl">
              Rankings & Social
            </h1>
            <p className="text-lg text-muted-foreground">
              Discover what the community is reading, debating, and collecting right now.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <div className="mb-6 flex gap-6 border-b border-border">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => setActiveTab(tab)}
                    className={cn(
                      "relative pb-3 text-sm font-medium transition-colors",
                      activeTab === tab
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {tab}
                    {activeTab === tab && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-foreground" />
                    )}
                  </button>
                ))}
              </div>

              <div className="space-y-4">
                {rankingBooks.map((book) => (
                  <RankingBookItem key={book.id} {...book} />
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <OpinionPanel opinions={opinions} />
              <TrendingTopics topics={trendingTopics} />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
