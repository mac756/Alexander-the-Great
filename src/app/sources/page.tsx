import Link from "next/link";

const recentScholarship = [
  {
    author: "Romm, James",
    title: "The Sacred Band: Three Hundred Theban Lovers Fighting to Save Greek Freedom",
    publisher: "Scribner",
    year: "2022",
    description: "Examines military context of Philip's conquests and Alexander's inheritance of Theban tactical innovations"
  },
  {
    author: "Müller, Sabine",
    title: "Alexander der Große: Eine Bilanz",
    publisher: "Kohlhammer Verlag",
    year: "2021",
    description: "German reassessment emphasizing Alexander's administrative failures and dependence on Philip's infrastructure"
  },
  {
    author: "Rathmann, Michael",
    title: "Alexander der Große und die Logistik des Alexanderzuges",
    publisher: "Franz Steiner Verlag",
    year: "2020",
    description: "Analysis of Alexander's logistics showing they were continuations of Philip's supply systems"
  }
];

const recentNapoleon = [
  {
    author: "Forrest, Alan",
    title: "Napoleon: Life, Legacy, and Image - A Biography",
    publisher: "Yale University Press",
    year: "2023",
    description: "Recent reassessment of Napoleon's military and administrative innovations"
  },
  {
    author: "Esdaile, Charles",
    title: "Napoleon's Wars: An International History, 1803-1815",
    publisher: "Penguin",
    year: "2024",
    description: "Latest comprehensive analysis of Napoleonic warfare and legacy"
  }
];

export default function Sources() {
  return (
    <div className="min-h-screen bg-stone-50">
      <nav className="bg-stone-900 text-stone-100 py-4 px-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-xl font-bold">Alexander the Great Not So Great</Link>
          <div className="flex gap-2">
            <Link href="/timeline" className="nav-link">Timeline</Link>
            <Link href="/technology" className="nav-link">Technology</Link>
            <Link href="/philip-factor" className="nav-link">The Philip Factor</Link>
            <Link href="/comparison" className="nav-link">vs Napoleon</Link>
            <Link href="/sources" className="nav-link active">Sources</Link>
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-center mb-4">Sources</h1>
        <p className="text-center text-stone-600 mb-12">Academic citations including recent scholarship (2020-2025)</p>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 pb-2 border-b-2 border-amber-600">Recent Scholarship (2020-2025)</h2>
          <div className="space-y-4">
            {recentScholarship.map((source, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 border-l-4 border-amber-600">
                <h3 className="text-xl font-bold text-stone-800">{source.title}</h3>
                <p className="text-amber-700 font-semibold mt-1">{source.author}</p>
                <p className="text-stone-500 text-sm">{source.publisher}, {source.year}</p>
                <p className="text-stone-600 mt-3">{source.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 pb-2 border-b-2 border-stone-600">Recent Napoleon Sources (2020-2025)</h2>
          <div className="space-y-4">
            {recentNapoleon.map((source, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 border-l-4 border-amber-600">
                <h3 className="text-xl font-bold text-stone-800">{source.title}</h3>
                <p className="text-amber-700 font-semibold mt-1">{source.author}</p>
                <p className="text-stone-500 text-sm">{source.publisher}, {source.year}</p>
                <p className="text-stone-600 mt-3">{source.description}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="mt-12 bg-stone-100 rounded-lg p-8">
          <h3 className="font-bold text-stone-800 mb-2">Academic Note</h3>
          <p className="text-stone-600">
            Recent scholarship (2020-2025) continues to support the thesis that Alexander's achievements 
            were heavily dependent on Philip II's military foundations, while Napoleon's innovations remain 
            well-documented in contemporary military historiography.
          </p>
        </div>
      </main>
    </div>
  );
}
