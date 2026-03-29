import Link from "next/link";

const primarySources = [
  {
    title: "Arrian - Anabasis of Alexander",
    description: "The most reliable ancient source on Alexander's campaigns",
    citation: "Arrian. Anabasis Alexandrou. Translated by P.A. Brunt. Harvard University Press, 1976."
  },
  {
    title: "Plutarch - Life of Alexander",
    description: "Biographical account with moral commentary",
    citation: "Plutarch. Lives, Volume VII. Translated by Bernadotte Perrin. Harvard University Press, 1919."
  },
  {
    title: "Diodorus Siculus - Library of History",
    description: "Universal history covering Alexander's reign",
    citation: "Diodorus Siculus. Library of History, Books 16-17. Translated by C. Bradford Welles. Harvard University Press, 1963."
  }
];

const modernScholarship = [
  {
    author: "Worthington, Ian",
    title: "Philip II of Macedonia",
    publisher: "Yale University Press",
    year: "2008",
    description: "Comprehensive study of Philip's military and political innovations"
  },
  {
    author: "Hammond, N.G.L.",
    title: "The Macedonian State",
    publisher: "Oxford University Press",
    year: "1989",
    description: "Definitive work on Macedonian institutions and military"
  },
  {
    author: "Green, Peter",
    title: "Alexander of Macedon, 356-323 B.C.",
    publisher: "University of California Press",
    year: "1991",
    description: "Critical biography questioning Alexander's traditional narrative"
  },
  {
    author: "Bosworth, A.B.",
    title: "Conquest and Empire: The Reign of Alexander the Great",
    publisher: "Cambridge University Press",
    year: "1988",
    description: "Analysis of Alexander's governance and administrative failures"
  },
  {
    author: "Ellis, J.R.",
    title: "Philip II and Macedonian Imperialism",
    publisher: "Princeton University Press",
    year: "1976",
    description: "Study of Philip's role in creating the Macedonian empire"
  },
  {
    author: "Fuller, J.F.C.",
    title: "The Generalship of Alexander the Great",
    publisher: "Rutgers University Press",
    year: "1960",
    description: "Military analysis showing Alexander's reliance on Philip's innovations"
  }
];

const napoleonSources = [
  {
    author: "Chandler, David",
    title: "The Campaigns of Napoleon",
    publisher: "Scribner",
    year: "1966",
    description: "Comprehensive military history of Napoleon's campaigns"
  },
  {
    author: "Roberts, Andrew",
    title: "Napoleon: A Life",
    publisher: "Viking",
    year: "2014",
    description: "Modern biography emphasizing Napoleon's innovations"
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
            <Link href="/philip-factor" className="nav-link">The Philip Factor</Link>
            <Link href="/comparison" className="nav-link">vs Napoleon</Link>
            <Link href="/sources" className="nav-link active">Sources</Link>
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-center mb-4">Sources</h1>
        <p className="text-center text-stone-600 mb-12">
          Academic citations and references for further reading
        </p>

        {/* Primary Sources */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 pb-2 border-b-2 border-amber-600">Primary Sources</h2>
          <div className="space-y-4">
            {primarySources.map((source, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-stone-800 mb-2">{source.title}</h3>
                <p className="text-stone-600 mb-3">{source.description}</p>
                <p className="text-sm text-stone-500 italic">{source.citation}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Modern Scholarship */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 pb-2 border-b-2 border-amber-600">Modern Scholarship</h2>
          <div className="space-y-4">
            {modernScholarship.map((source, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold text-stone-800">{source.title}</h3>
                    <p className="text-amber-700 font-semibold mt-1">{source.author}</p>
                    <p className="text-stone-500 text-sm">{source.publisher}, {source.year}</p>
                  </div>
                </div>
                <p className="text-stone-600 mt-3">{source.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Napoleon Sources */}
        <section>
          <h2 className="text-3xl font-bold mb-6 pb-2 border-b-2 border-stone-600">Napoleon Sources</h2>
          <div className="space-y-4">
            {napoleonSources.map((source, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-stone-800">{source.title}</h3>
                <p className="text-stone-600 mt-1">{source.author}</p>
                <p className="text-stone-500 text-sm">{source.publisher}, {source.year}</p>
                <p className="text-stone-600 mt-3">{source.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Academic Note */}
        <div className="mt-12 bg-stone-100 rounded-lg p-8">
          <h3 className="font-bold text-stone-800 mb-2">Academic Note</h3>
          <p className="text-stone-600">
            This educational resource is based on modern historical scholarship and primary sources. 
            The conclusions presented represent the consensus of contemporary historians who emphasize 
            Philip II's foundational role in Macedonian military success. The comparison with Napoleon 
            is based on established military historiography.
          </p>
        </div>
      </main>
    </div>
  );
}
