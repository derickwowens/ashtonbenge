import { Phone, Mail, MessageCircleHeart } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <MessageCircleHeart className="w-6 h-6 text-warmth-400" />
          <h1 className="text-3xl font-serif font-bold text-stone-800">
            Contact Your Dad
          </h1>
        </div>
        <p className="text-stone-600 leading-relaxed">
          Whenever you&apos;re ready, I&apos;m here. No pressure, no expectations. Just an open door.
        </p>
      </div>

      <div className="space-y-6">
        <a
          href="tel:910-604-2928"
          className="block bg-white rounded-xl p-6 border border-warmth-200 hover:border-warmth-300 hover:shadow-md transition-all group"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-warmth-100 flex items-center justify-center group-hover:bg-warmth-200 transition-colors">
              <Phone className="w-5 h-5 text-warmth-500" />
            </div>
            <div>
              <p className="text-sm text-warmth-500 font-medium mb-1">Phone</p>
              <p className="text-xl font-serif text-stone-800">910-604-2928</p>
            </div>
          </div>
        </a>

        <a
          href="mailto:derickwowens@gmail.com"
          className="block bg-white rounded-xl p-6 border border-warmth-200 hover:border-warmth-300 hover:shadow-md transition-all group"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-warmth-100 flex items-center justify-center group-hover:bg-warmth-200 transition-colors">
              <Mail className="w-5 h-5 text-warmth-500" />
            </div>
            <div>
              <p className="text-sm text-warmth-500 font-medium mb-1">Email</p>
              <p className="text-xl font-serif text-stone-800">derickwowens@gmail.com</p>
            </div>
          </div>
        </a>
      </div>

      <div className="mt-12 bg-warmth-50 rounded-xl p-8 border border-warmth-200">
        <p className="text-stone-700 font-serif text-lg leading-relaxed text-center italic">
          A call, a text, an email. Whatever feels right for you. I&apos;ll be waiting.
        </p>
      </div>
    </div>
  );
}
