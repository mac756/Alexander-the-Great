"use client";

import Link from "next/link";
import { useState } from "react";

interface Myth {
  myth: string;
  reality: string;
  sources: string[];
}

const myths: Myth[] = [
  {
    myth: "Alexander created the Macedonian phalanx",
    reality: "Philip II invented the sarissa phalanx years before Alexander's reign.",
    sources: ["Worthington, Ian. Philip II of Macedonia. Yale University Press, 2008."]
  },
  {
    myth: "Alexander built a professional army",
    reality: "Philip II created the first professional standing army in Greek history.",
    sources: ["Sekunda, Nicholas. The Army of Alexander the Great. Osprey Publishing, 1984."]
  }
];

export default function PhilipFactor() {
  const [revealedMyths, setRevealedMyths] = useState<number[]>([]);

  const toggleMyth = (index: number) => {
    if (revealedMyths.includes(index)) {
      setRevealedMyths(revealedMyths.filter(i => i !== index));
    } else {
      setRevealedMyths([...revealedMyths, index]);
    }
  };

  return (
    <div className="min-h-screen bg-stone-50">
      <nav className="bg-stone-900 text-stone-100 py-4 px-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-xl font-bold">Alexander the Great Not So Great</Link>
          <div className="flex gap-2">
            <Link href="/timeline" className="nav-link">Timeline</Link>
            <Link href="/technology" className="nav-link">Technology</Link>
            <Link href="/philip-factor" className="nav-link active">The Philip Factor</Link>
            <Link href="/comparison" className="nav-link">vs Napoleon</Link>
            <Link href="/sources" className="nav-link">Sources</Link>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-center mb-4">The Philip Factor</h1>
        <p className="text-center text-stone-600 mb-12">Click on each myth to reveal the reality.</p>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Myth vs Reality</h2>
          <div className="space-y-6">
            {myths.map((myth, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="myth-card myth">
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="text-red-700 font-bold text-sm uppercase">The Myth</span>
                      <p className="text-lg mt-2">{myth.myth}</p>
                    </div>
                    <button onClick={() => toggleMyth(index)} className="reveal-btn ml-4">
                      {revealedMyths.includes(index) ? "Hide Truth" : "Reveal Truth"}
                    </button>
                  </div>
                </div>

                {revealedMyths.includes(index) && (
                  <div className="myth-card reality border-t-0 rounded-t-none">
                    <span className="text-amber-700 font-bold text-sm uppercase">The Reality</span>
                    <p className="text-lg mt-2">{myth.reality}</p>
                    <p className="text-sm text-stone-600 mt-4">Source: {myth.sources[0]}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
