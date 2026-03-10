import Link from "next/link";
import { getSortedPosts } from "@/lib/posts";
import { ArrowRight, Mail } from "lucide-react";
import { format, parseISO } from "date-fns";

export default function LettersPage() {
  const posts = getSortedPosts();

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <Mail className="w-6 h-6 text-warmth-400" />
          <h1 className="text-3xl font-serif font-bold text-stone-800">
            All Letters
          </h1>
        </div>
        <p className="text-stone-600 leading-relaxed">
          Every letter here is written for you, Ashton. Take your time.
        </p>
      </div>

      {posts.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-stone-500 italic">
            The first letter is being written...
          </p>
        </div>
      ) : (
        <div className="space-y-5">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/letters/${post.slug}`}
              className="block group"
            >
              <article className="bg-white rounded-xl p-6 border border-warmth-200 hover:border-warmth-300 hover:shadow-md transition-all">
                <time className="text-sm text-warmth-500 font-medium">
                  {format(parseISO(post.date), "MMMM d, yyyy")}
                </time>
                <h2 className="text-xl font-serif font-semibold text-stone-800 mt-1 group-hover:text-warmth-600 transition-colors">
                  {post.title}
                </h2>
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
      )}
    </div>
  );
}
