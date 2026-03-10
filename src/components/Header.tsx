"use client";

import Link from "next/link";
import { Heart } from "lucide-react";

export default function Header() {
  return (
    <header className="border-b border-warmth-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
      <nav className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <Heart className="w-5 h-5 text-warmth-400 group-hover:text-warmth-500 transition-colors fill-warmth-400" />
          <span className="text-xl font-serif font-semibold text-stone-800">
            Letters to Ashton
          </span>
        </Link>
        <div className="flex gap-6 text-sm">
          <Link
            href="/"
            className="text-stone-600 hover:text-warmth-600 transition-colors"
          >
            Home
          </Link>
          <Link
            href="/letters"
            className="text-stone-600 hover:text-warmth-600 transition-colors"
          >
            Letters
          </Link>
          <Link
            href="/about"
            className="text-stone-600 hover:text-warmth-600 transition-colors"
          >
            About
          </Link>
        </div>
      </nav>
    </header>
  );
}
