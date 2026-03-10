import Link from "next/link";
import { getSortedPosts } from "@/lib/posts";
import { Heart, BookOpen, ArrowRight } from "lucide-react";
import { format, parseISO } from "date-fns";

export default function Home() {
  const recentPosts = getSortedPosts().slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-warmth-100/50 to-warmth-50" />
        <div className="relative max-w-3xl mx-auto px-6 py-20 text-center">
          <Heart className="w-10 h-10 text-warmth-400 fill-warmth-400 mx-auto mb-6 animate-pulse" />
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-stone-800 mb-6 leading-tight">
            Dear Ashton
          </h1>
          <p className="text-lg md:text-xl text-stone-600 leading-relaxed max-w-2xl mx-auto mb-8">
            This is a place I created just for you. A collection of letters,
            thoughts, and all the things I&apos;ve always wanted to say. Whenever
            you&apos;re ready, they&apos;ll be here waiting.
          </p>
          <Link
            href="/letters"
            className="inline-flex items-center gap-2 bg-warmth-500 text-white px-6 py-3 rounded-full hover:bg-warmth-600 transition-colors text-sm font-medium"
          >
            <BookOpen className="w-4 h-4" />
            Read My Letters
          </Link>
        </div>
      </section>

      {/* Recent Letters */}
      {recentPosts.length > 0 && (
        <section className="max-w-3xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-serif font-bold text-stone-800 mb-8">
            Recent Letters
          </h2>
          <div className="space-y-6">
            {recentPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/letters/${post.slug}`}
                className="block group"
              >
                <article className="bg-white rounded-xl p-6 border border-warmth-200 hover:border-warmth-300 hover:shadow-md transition-all">
                  <time className="text-sm text-warmth-500 font-medium">
                    {format(parseISO(post.date), "MMMM d, yyyy")}
                  </time>
                  <h3 className="text-xl font-serif font-semibold text-stone-800 mt-1 group-hover:text-warmth-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-stone-600 mt-2 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-1 text-warmth-500 text-sm mt-3 group-hover:gap-2 transition-all">
                    Read more <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </article>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/letters"
              className="text-warmth-600 hover:text-warmth-700 font-medium text-sm transition-colors"
            >
              View all letters →
            </Link>
          </div>
        </section>
      )}
    </div>
  );
}
