import { Heart } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <Heart className="w-6 h-6 text-warmth-400 fill-warmth-400" />
          <h1 className="text-3xl font-serif font-bold text-stone-800">
            About This Place
          </h1>
        </div>
      </div>

      <div className="bg-white rounded-xl p-8 border border-warmth-200">
        <div className="prose font-serif text-lg leading-relaxed">
          <p className="mb-4 text-stone-700">
            Dear Ashton,
          </p>
          <p className="mb-4 text-stone-700">
            This website exists for one reason: you. I created this space to
            share my thoughts, my hopes, and all the things I wish I could tell
            you in person.
          </p>
          <p className="mb-4 text-stone-700">
            We haven&apos;t met yet, but not a day goes by that I don&apos;t
            think about you. Every letter here is written from my heart to
            yours. They&apos;re meant for whenever you&apos;re ready to read
            them — whether that&apos;s today, tomorrow, or years from now.
          </p>
          <p className="mb-4 text-stone-700">
            There&apos;s no pressure, no expectations. Just a father&apos;s love,
            put into words, waiting patiently for the day we connect.
          </p>
          <p className="text-stone-700">
            With love, always.
          </p>
        </div>
      </div>
    </div>
  );
}
