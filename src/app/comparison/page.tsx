"use client";

import Link from "next/link";

interface ComparisonPoint {
  category: string;
  alexander: string;
  napoleon: string;
  winner: "alexander" | "napoleon" | "tie";
}

const comparisons: ComparisonPoint[] = [
  {
    category: "Army Creation",
    alexander: "Inherited 30,000 professional soldiers trained by Philip II",
    napoleon: "Built the Grande Armee from scratch, creating corps system",
    winner: "napoleon"
  },
  {
    category: "Military Innovation",
    alexander: "Used father's sarissa phalanx and combined arms tactics",
    napoleon: "Revolutionized warfare with corps system, independent divisions, and maneuver warfare",
    winner: "napoleon"
  },
  {
    category: "Empire Duration",
    alexander: "Empire collapsed into civil war within 2 years of death",
    napoleon: "Legacy institutions survived; influence lasted decades",
    winner: "napoleon"
  },
  {
    category: "Administrative Skill",
    alexander: "No stable government; focused on conquest only",
    napoleon: "Created lasting legal code (Napoleonic Code), reorganized education, infrastructure",
    winner: "napoleon"
  },
  {
    category: "Logistics",
    alexander: "Relied on inherited supply system",
    napoleon: "Pioneered modern logistics and supply chains",
    winner: "napoleon"
  },
  {
    category: "Battlefield Tactics",
    alexander: "Competent commander using proven tactics",
    napoleon: "Military genius; revolutionized tactics still studied today",
    winner: "napoleon"
  }
];

const statistics = [
  { label: "Years of Conquests", alexander: 10, napoleon: 15, alexanderLabel: "334-323 BC", napoleonLabel: "1800-1815" },
  { label: "Empire Duration After Death", alexander: 2, napoleon: 50, alexanderLabel: "Civil war", napoleonLabel: "Lasting influence" },
  { label: "Major Battles Won", alexander: 8, napoleon: 60, alexanderLabel: "Key victories", napoleonLabel: "Won most battles" }
];

export default function Comparison() {
  return (
    <div className="min-h-screen bg-stone-50">
      <nav className="bg-stone-900 text-stone-100 py-4 px-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-xl font-bold">Alexander the Great Not So Great</Link>
          <div className="flex gap-2">
            <Link href="/timeline" className="nav-link">Timeline</Link>
            <Link href="/philip-factor" className="nav-link">The Philip Factor</Link>
            <Link href="/comparison" className="nav-link active">vs Napoleon</Link>
            <Link href="/sources" className="nav-link">Sources</Link>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-center mb-4">Alexander vs Napoleon</h1>
        <p className="text-center text-stone-600 mb-12 max-w-3xl mx-auto text-lg">
          A comparison of two military leaders: one who built an empire from nothing, 
          and one who inherited everything.
        </p>

        {/* Comparison Table */}
        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="grid grid-cols-3 bg-stone-800 text-stone-100">
              <div className="p-4 font-bold">Category</div>
              <div className="p-4 font-bold text-center">Alexander</div>
              <div className="p-4 font-bold text-center">Napoleon</div>
            </div>
            {comparisons.map((comp, index) => (
              <div key={index} className={`grid grid-cols-3 border-b border-stone-200 ${index % 2 === 0 ? 'bg-stone-50' : 'bg-white'}`}>
                <div className="p-4 font-semibold text-stone-800">{comp.category}</div>
                <div className={`p-4 text-stone-700 ${comp.winner === 'alexander' ? 'bg-amber-100' : ''}`}>
                  {comp.alexander}
                </div>
                <div className={`p-4 text-stone-700 ${comp.winner === 'napoleon' ? 'bg-amber-100' : ''}`}>
                  {comp.napoleon}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Statistics */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">By the Numbers</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {statistics.map((stat, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center">
                <h3 className="font-bold text-xl mb-4 text-stone-800">{stat.label}</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-stone-100 rounded p-4">
                    <p className="text-2xl font-bold text-amber-700">{stat.alexander}</p>
                    <p className="text-sm text-stone-600 mt-1">{stat.alexanderLabel}</p>
                  </div>
                  <div className="bg-stone-100 rounded p-4">
                    <p className="text-2xl font-bold text-stone-700">{stat.napoleon}</p>
                    <p className="text-sm text-stone-600 mt-1">{stat.napoleonLabel}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Conclusion */}
        <section className="bg-stone-800 text-stone-100 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">The Verdict</h2>
          <p className="text-lg leading-relaxed mb-4">
            While both Alexander and Napoleon were accomplished military leaders, the comparison reveals a crucial difference: 
            Napoleon built his empire from scratch, revolutionizing military tactics and creating lasting institutions. 
            Alexander, by contrast, inherited a fully functional war machine from his father Philip II.
          </p>
          <p className="text-lg leading-relaxed">
            Napoleon's empire survived his defeat and influenced Europe for generations. Alexander's empire 
            collapsed almost immediately after his death, revealing his administrative failures and lack of lasting vision.
          </p>
        </section>
      </main>
    </div>
  );
}
