import Link from "next/link";
import { getPostBySlug, getAllPostSlugs } from "@/lib/posts";
import { ArrowLeft, Calendar } from "lucide-react";
import { format, parseISO } from "date-fns";

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function LetterPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPostBySlug(params.slug);

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <Link
        href="/letters"
        className="inline-flex items-center gap-1 text-warmth-500 hover:text-warmth-600 text-sm mb-8 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to all letters
      </Link>

      <article>
        <header className="mb-10">
          <div className="flex items-center gap-2 text-warmth-500 mb-3">
            <Calendar className="w-4 h-4" />
            <time className="text-sm font-medium">
              {format(parseISO(post.date), "MMMM d, yyyy")}
            </time>
          </div>
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-stone-800 leading-tight">
            {post.title}
          </h1>
        </header>

        <div
          className="prose font-serif text-lg leading-relaxed"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />
      </article>

      <div className="mt-16 pt-8 border-t border-warmth-200 text-center">
        <p className="text-stone-500 italic text-sm">
          With all my love, always.
        </p>
      </div>
    </div>
  );
}
