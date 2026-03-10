import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-warmth-200 bg-white/60 py-8 mt-16">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <p className="text-stone-500 text-sm flex items-center justify-center gap-1">
          Written with{" "}
          <Heart className="w-3.5 h-3.5 text-warmth-400 fill-warmth-400" /> for
          Ashton
        </p>
      </div>
    </footer>
  );
}
