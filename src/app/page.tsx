import Link from "next/link";
import InteractiveMap from "./components/InteractiveMap";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-100 to-stone-50">
      <nav className="bg-stone-900 text-stone-100 py-4 px-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-xl font-bold">Alexander the Great Not So Great</Link>
          <div className="flex gap-2">
            <Link href="/timeline" className="nav-link">Timeline</Link>
            <Link href="/technology" className="nav-link">Technology</Link>
            <Link href="/philip-factor" className="nav-link">The Philip Factor</Link>
            <Link href="/comparison" className="nav-link">vs Napoleon</Link>
            <Link href="/sources" className="nav-link">Sources</Link>
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
        {/* Interactive Map Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Interactive Conquest Map</h2>
          <p className="text-center text-stone-600 mb-8 max-w-2xl mx-auto">
            Explore Alexander's conquests across the ancient world. Click on points to see how each victory relied on Philip II's military innovations.
          </p>
          <InteractiveMap />
        </section>

        {/* Navigation Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Link href="/timeline" className="group">
            <div className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-amber-600 hover:shadow-xl transition-all h-full">
              <h2 className="text-2xl font-bold text-stone-800 mb-3">Interactive Timeline</h2>
              <p className="text-stone-600">Explore the conquests and see how Philip II's groundwork made them possible.</p>
            </div>
          </Link>

          <Link href="/philip-factor" className="group">
            <div className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-red-700 hover:shadow-xl transition-all h-full">
              <h2 className="text-2xl font-bold text-stone-800 mb-3">The Philip Factor</h2>
              <p className="text-stone-600">Myth-busting analysis of Alexander's dependency on his father's military innovations.</p>
            </div>
          </Link>

          <Link href="/comparison" className="group">
            <div className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-stone-600 hover:shadow-xl transition-all h-full">
              <h2 className="text-2xl font-bold text-stone-800 mb-3">Alexander vs Napoleon</h2>
              <p className="text-stone-600">Compare two military leaders: one who built an empire, one who inherited it.</p>
            </div>
          </Link>

          <Link href="/sources" className="group">
            <div className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-stone-500 hover:shadow-xl transition-all h-full">
              <h2 className="text-2xl font-bold text-stone-800 mb-3">Sources</h2>
              <p className="text-stone-600">Academic citations including recent scholarship (2020-2025).</p>
            </div>
          </Link>
        </div>

        {/* Thesis Statement */}
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
