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
            <Link href="/technology" className="nav-link">Technology</Link>
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

        
        {/* Casualties Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">The Cost of Glory: Casualty Comparison</h2>
          
          {/* Casualty Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-10">
            {/* Alexander Casualties */}
            <div className="bg-[#f4e4bc] rounded-xl shadow-lg overflow-hidden border-4 border-[#8b6914]">
              <div className="bg-[#8b6914] text-[#f4e4bc] p-4 text-center">
                <h3 className="text-2xl font-bold font-serif">Alexander the Great</h3>
                <p className="text-sm opacity-90">334-323 BC (10 Years)</p>
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <p className="text-sm text-[#5c4033] font-serif mb-1">Enemy Casualties</p>
                  <p className="text-4xl font-bold text-[#8b0000]">200,000+</p>
                  <p className="text-xs text-stone-600 mt-1">Persians, Indians, and others killed in battle</p>
                </div>
                <div className="border-t border-[#8b6914]/30 pt-4">
                  <p className="text-sm text-[#5c4033] font-serif mb-1">Macedonian Losses</p>
                  <p className="text-4xl font-bold text-[#8b0000]">50,000+</p>
                  <p className="text-xs text-stone-600 mt-1">Soldiers lost from inherited army</p>
                </div>
                <div className="mt-4 p-3 bg-[#8b0000]/10 rounded border-l-4 border-[#8b0000]">
                  <p className="text-sm text-[#5c4033] font-serif">
                    <strong>Result:</strong> Empire collapsed within 2 years of his death
                  </p>
                </div>
              </div>
            </div>

            {/* Napoleon Casualties */}
            <div className="bg-stone-100 rounded-xl shadow-lg overflow-hidden border-4 border-stone-600">
              <div className="bg-stone-800 text-stone-100 p-4 text-center">
                <h3 className="text-2xl font-bold font-serif">Napoleon Bonaparte</h3>
                <p className="text-sm opacity-90">1800-1815 (15 Years)</p>
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <p className="text-sm text-stone-600 font-serif mb-1">Enemy Casualties</p>
                  <p className="text-4xl font-bold text-stone-800">1,000,000+</p>
                  <p className="text-xs text-stone-600 mt-1">Across European campaigns</p>
                </div>
                <div className="border-t border-stone-300 pt-4">
                  <p className="text-sm text-stone-600 font-serif mb-1">French Losses</p>
                  <p className="text-4xl font-bold text-stone-800">400,000+</p>
                  <p className="text-xs text-stone-600 mt-1">Grand Armée soldiers lost</p>
                </div>
                <div className="mt-4 p-3 bg-stone-300/30 rounded border-l-4 border-stone-600">
                  <p className="text-sm text-stone-700 font-serif">
                    <strong>Result:</strong> Napoleonic Code and reforms still influence law today
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Casualty Analysis */}
          <div className="bg-[#f4e4bc] rounded-xl p-8 shadow-lg border-2 border-[#8b6914]">
            <h3 className="text-2xl font-bold text-[#5c4033] font-serif mb-6 text-center">The Paradox of Casualties</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-bold text-[#8b0000] mb-3 font-serif">Alexander: High Casualties, Immediate Collapse</h4>
                <p className="text-[#5c4033] leading-relaxed mb-3">
                  Despite conquering vast territories and killing over 200,000 enemies, Alexander's empire was nothing more than a personal military dictatorship. Without him, it immediately fractured.
                </p>
                <ul className="list-disc list-inside text-[#5c4033] space-y-2 text-sm">
                  <li>No administrative infrastructure</li>
                  <li>No succession plan</li>
                  <li>Empire split into warring successor kingdoms</li>
                  <li>All conquests lost within decades</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-bold text-stone-700 mb-3 font-serif">Napoleon: More Casualties, Lasting Legacy</h4>
                <p className="text-stone-600 leading-relaxed mb-3">
                  Napoleon caused far more casualties over a longer period, yet his impact endured. The Napoleonic Code remains the basis for legal systems in over 70 countries.
                </p>
                <ul className="list-disc list-inside text-stone-600 space-y-2 text-sm">
                  <li>Created modern administrative systems</li>
                  <li>Established the Napoleonic Code</li>
                  <li>Reformed education and infrastructure</li>
                  <li>Influence persists 200+ years later</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-[#8b6914]/10 rounded-lg border border-[#8b6914]">
              <p className="text-[#5c4033] font-serif italic text-center">
                <strong>The Verdict:</strong> Casualties alone do not measure greatness. Napoleon killed more but built lasting institutions. 
                Alexander killed hundreds of thousands yet created nothing that survived him.
              </p>
            </div>
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
