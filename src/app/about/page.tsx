import { Heart } from "lucide-react";
import Image from "next/image";

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

      <div className="bg-white rounded-xl p-8 border border-warmth-200 mb-12">
        <div className="prose font-serif text-lg leading-relaxed">
          <p className="mb-4 text-stone-700">
            This website exists for one reason: you, Ashton.
          </p>
          <p className="mb-4 text-stone-700">
            I created this space to share my thoughts, tell you about myself,
            and hopefully one day, learn about you too.
          </p>
          <p className="text-stone-700">
            With love, always.
          </p>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-serif font-bold text-stone-800 mb-2">
          Yes, THIS Ashton Benge
        </h2>
        <p className="text-stone-600 mb-6">
          Just in case there was any confusion about who this site is for.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-16">
        <div className="relative aspect-square rounded-xl overflow-hidden border border-warmth-200">
          <Image
            src="/images/ashton-1.jpg"
            alt="Ashton"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative aspect-square rounded-xl overflow-hidden border border-warmth-200">
          <Image
            src="/images/ashton-2.jpg"
            alt="Ashton"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative aspect-[3/4] rounded-xl overflow-hidden border border-warmth-200">
          <Image
            src="/images/ashton-3.png"
            alt="Ashton"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative aspect-[3/4] rounded-xl overflow-hidden border border-warmth-200">
          <Image
            src="/images/ashton-4.png"
            alt="Ashton"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-serif font-bold text-stone-800 mb-6">
          About Your Family
        </h2>
      </div>

      <div className="bg-white rounded-xl p-8 border border-warmth-200 mb-8">
        <h3 className="text-xl font-serif font-semibold text-stone-800 mb-4">
          Your Dad
        </h3>
        <div className="prose font-serif text-lg leading-relaxed text-stone-700">
          <p className="mb-4">
            My name is Derick Owens. I&apos;m 37 years old and I work as a Lead Software Engineer at State Farm. Yes, like the insurance company from the commercials.
          </p>
          <p className="mb-4">
            I just bought a new house in Waterloo, Wisconsin. It&apos;s a small town, but it&apos;s home.
          </p>
          <p className="mb-4">
            I&apos;ve traveled around the world and have always been curious about everything. I&apos;ve studied history, religions, and just about anything that helps me understand people and the world better.
          </p>
          <p>
            Our household loves good music and Disney movies. You&apos;d fit right in.
          </p>
        </div>
      </div>

      <div className="bg-white rounded-xl p-8 border border-warmth-200">
        <h3 className="text-xl font-serif font-semibold text-stone-800 mb-4">
          Your Sister, Lolly
        </h3>
        <div className="prose font-serif text-lg leading-relaxed text-stone-700">
          <p className="mb-4">
            You have a little sister. Her name is Lolly, and she&apos;s 3 years old, going on 4.
          </p>
          <p>
            She doesn&apos;t know about you yet, but someday she will. And I know she&apos;d love to meet her big sister.
          </p>
        </div>
      </div>
    </div>
  );
}
