import Link from "next/link";
import InteractiveMap from "./components/InteractiveMap";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-100 to-stone-50">
      <nav className="bg-stone-900 text-stone-100 py-4 px-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-xl font-bold">Alexander the Great Not So Great</Link>
          <div className="flex gap-2">
            <Link href="/timeline" className="px-4 py-2 rounded-lg bg-[#d4af37] text-[#5c4033] font-semibold hover:bg-[#c4a030] transition-all shadow-lg">Timeline</Link>
            <Link href="/technology" className="px-4 py-2 rounded-lg bg-[#4a90e2] text-white font-semibold hover:bg-[#3a80d2] transition-all shadow-lg">Technology</Link>
            <Link href="/philip-factor" className="px-4 py-2 rounded-lg bg-[#8b0000] text-white font-semibold hover:bg-[#7a0000] transition-all shadow-lg">Philip Factor</Link>
            <Link href="/comparison" className="px-4 py-2 rounded-lg bg-[#228b22] text-white font-semibold hover:bg-[#1a7a1a] transition-all shadow-lg">vs Napoleon</Link>
            <Link href="/sources" className="px-4 py-2 rounded-lg bg-[#663399] text-white font-semibold hover:bg-[#552288] transition-all shadow-lg">Sources</Link>
          </div>
        </div>
      </nav>

      <header className="py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-stone-900 mb-6">
            Alexander the Great
            <span className="block text-red-800 text-4xl md:text-6xl mt-2">Not So Great</span>
          </h1>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto leading-relaxed">
            An educational examination challenging the myth of Alexander the Great. 
            Discover the truth about his dependency on his father Philip II.
          </p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12">
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Interactive Conquest Map</h2>
          <p className="text-center text-stone-600 mb-8 max-w-2xl mx-auto">
            Explore Alexander&apos;s conquests across the ancient world. Click on points to see how each victory relied on Philip II&apos;s military innovations.
          </p>
          <InteractiveMap />
        </section>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          <Link href="/timeline" className="group">
            <div className="bg-white rounded-xl shadow-lg p-10 border-2 border-[#d4af37] hover:shadow-2xl hover:bg-[#fff8dc] transition-all duration-300 h-full flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">📜</span>
                <h2 className="text-2xl font-bold text-[#5c4033]">Timeline</h2>
              </div>
              <p className="text-[#5c4033] flex-grow">Explore the conquests and see how Philip II&apos;s groundwork made them possible.</p>
            </div>
          </Link>

          <Link href="/technology" className="group">
            <div className="bg-white rounded-xl shadow-lg p-10 border-2 border-[#4a90e2] hover:shadow-2xl hover:bg-[#f0f8ff] transition-all duration-300 h-full flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">⚔️</span>
                <h2 className="text-2xl font-bold text-[#5c4033]">Technology</h2>
              </div>
              <p className="text-[#5c4033] flex-grow">Discover the military innovations that Philip II created and Alexander inherited.</p>
            </div>
          </Link>

          <Link href="/philip-factor" className="group">
            <div className="bg-white rounded-xl shadow-lg p-10 border-2 border-[#8b0000] hover:shadow-2xl hover:bg-[#fff5f5] transition-all duration-300 h-full flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">👑</span>
                <h2 className="text-2xl font-bold text-[#5c4033]">Philip Factor</h2>
              </div>
              <p className="text-[#5c4033] flex-grow">Myth-busting analysis of Alexander&apos;s dependency on his father&apos;s innovations.</p>
            </div>
          </Link>

          <Link href="/comparison" className="group">
            <div className="bg-white rounded-xl shadow-lg p-10 border-2 border-[#228b22] hover:shadow-2xl hover:bg-[#f0fff0] transition-all duration-300 h-full flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">⚖️</span>
                <h2 className="text-2xl font-bold text-[#5c4033]">vs Napoleon</h2>
              </div>
              <p className="text-[#5c4033] flex-grow">Compare two military leaders: one who built an empire, one who inherited it.</p>
            </div>
          </Link>

          <Link href="/sources" className="group">
            <div className="bg-white rounded-xl shadow-lg p-10 border-2 border-[#663399] hover:shadow-2xl hover:bg-[#faf5ff] transition-all duration-300 h-full flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">📚</span>
                <h2 className="text-2xl font-bold text-[#5c4033]">Sources</h2>
              </div>
              <p className="text-[#5c4033] flex-grow">Academic citations including recent scholarship (2020-2025).</p>
            </div>
          </Link>
        </div>

        <section className="mt-16 bg-stone-800 text-stone-100 rounded-lg p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-6 text-center">The Thesis</h2>
          <div className="max-w-3xl mx-auto text-lg leading-relaxed space-y-4">
            <p>
              While history remembers Alexander as &quot;the Great,&quot; a critical examination reveals 
              that his achievements were built almost entirely upon the foundations laid by his father, 
              Philip II of Macedon. From the revolutionary phalanx formation to a professional standing 
              army and a treasury flush with gold, Alexander inherited the tools of conquest rather than 
              forging them himself.
            </p>
          </div>
        </section>
      </main>

      <footer className="bg-stone-900 text-stone-400 py-8 px-6 text-center">
        <p className="text-sm">Educational resource examining historical narratives</p>
      </footer>
    </div>
  );
}
