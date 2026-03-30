"use client";

import Link from "next/link";
import { useState } from "react";

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  isPhilip: boolean;
  details: string;
}

const timelineEvents: TimelineEvent[] = [
  {
    year: "382 BC",
    title: "Philip II Born",
    description: "Philip II of Macedon is born, destined to transform Macedonia",
    isPhilip: true,
    details: "Philip would go on to revolutionize Macedonian warfare, creating the sarissa phalanx and professionalizing the army."
  },
  {
    year: "356 BC",
    title: "Alexander Born",
    description: "Alexander is born into an already powerful kingdom",
    isPhilip: true,
    details: "By the time of Alexander's birth, Philip had already begun his military reforms and expansion."
  },
  {
    year: "338 BC",
    title: "Battle of Chaeronea",
    description: "Philip's decisive victory unifies Greece",
    isPhilip: true,
    details: "At Chaeronea, Philip's reformed army crushed the combined forces of Athens and Thebes. Alexander, then 18, commanded the left wing but the victory was Philip's."
  },
  {
    year: "336 BC",
    title: "Philip Assassinated",
    description: "Alexander inherits a fully prepared war machine",
    isPhilip: false,
    details: "When Philip was assassinated, Alexander inherited: a professional army of 30,000, a unified Greece, gold mines producing 1,000 talents annually, and siege technology perfected by Philip."
  },
  {
    year: "334 BC",
    title: "Granicus River",
    description: "First major battle in Persia using Philip's army",
    isPhilip: false,
    details: "Alexander won using the same tactics and troops his father had trained. The Macedonian phalanx, heavy cavalry, and combined arms tactics were all Philip's innovations."
  },
  {
    year: "333 BC",
    title: "Battle of Issus",
    description: "Defeat of Darius III",
    isPhilip: false,
    details: "Once again, the professional army built and trained by Philip carried Alexander to victory against the Persian Great King."
  },
  {
    year: "331 BC",
    title: "Battle of Gaugamela",
    description: "Conquest of the Persian Empire",
    isPhilip: false,
    details: "Alexander's most famous victory, but achieved with an army that Philip had spent 20 years perfecting."
  },
  {
    year: "331 BC",
    title: "Darius's Incompetence at Gaugamela",
    description: "Persian leadership failure, not just Alexander's skill",
    isPhilip: false,
    details: "Darius chose disadvantageous flat terrain favoring Macedonian cavalry, abandoned his army and fled when battle turned, leaving Persian forces leaderless. Shows Persian leadership failure, not just Alexander's skill."
  },
  {
    year: "330 BC",
    title: "Burning of Persepolis",
    description: "Alexander burns Persian capital in drunken revelry",
    isPhilip: false,
    details: "Alexander burns the Persian capital in drunken revelry, alienating Persian subjects and showing poor governance. A strategic blunder that undermined his ability to rule the conquered territories."
  },
  {
    year: "326 BC",
    title: "The Mutiny at the Hyphasis River",
    description: "Alexander's army refuses to continue into India",
    isPhilip: false,
    details: "After 8 years of campaigning, Alexander's exhausted and homesick soldiers refused to continue into India. Shows Alexander's poor leadership - couldn't inspire men to follow him further. The army mutinied and forced him to turn back."
  },
  {
    year: "323 BC",
    title: "Alexander Dies",
    description: "Empire fragments within years",
    isPhilip: false,
    details: "Alexander died at age 32. Unlike Philip's stable kingdom, Alexander's empire immediately collapsed into civil war, showing his administrative failures."
  }
];

export default function Timeline() {
  const [selectedEvent, setSelectedEvent] = useState<TimelineEvent | null>(null);

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Navigation */}
      <nav className="bg-stone-900 text-stone-100 py-4 px-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-xl font-bold font-[family-name:var(--font-playfair)]">
            Alexander the Great Not So Great
          </Link>
          <div className="flex gap-2">
            <Link href="/timeline" className="nav-link active">Timeline</Link>
            <Link href="/philip-factor" className="nav-link">The Philip Factor</Link>
            <Link href="/comparison" className="nav-link">vs Napoleon</Link>
            <Link href="/sources" className="nav-link">Sources</Link>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-center mb-4 font-[family-name:var(--font-playfair)]">Interactive Timeline</h1>
        <p className="text-center text-stone-600 mb-12 max-w-2xl mx-auto">
          Click on events to learn more. Events marked in gold show Philip II&apos;s contributions. 
          Events in bronze show Alexander&apos;s actions.
        </p>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-amber-600 via-amber-500 to-stone-600"></div>

          {/* Events */}
          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                {/* Content */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                  <div 
                    className={`cursor-pointer bg-white rounded-lg shadow-md p-6 border-l-4 transition-all hover:shadow-xl ${
                      event.isPhilip ? 'border-amber-600' : 'border-stone-600'
                    }`}
                    onClick={() => setSelectedEvent(event)}
                  >
                    <span className={`text-sm font-bold ${event.isPhilip ? 'text-amber-600' : 'text-stone-600'}`}>
                      {event.year}
                    </span>
                    <h3 className="text-xl font-bold mt-1 mb-2 font-[family-name:var(--font-playfair)]">{event.title}</h3>
                    <p className="text-stone-600">{event.description}</p>
                    <button className="mt-4 reveal-btn text-sm">Learn More</button>
                  </div>
                </div>

                {/* Center Point */}
                <div className={`w-2/12 flex justify-center`}>
                  <div className={`w-4 h-4 rounded-full border-4 border-white shadow-md ${
                    event.isPhilip ? 'bg-amber-600' : 'bg-stone-600'
                  }`}></div>
                </div>

                {/* Empty space for alternating layout */}
                <div className="w-5/12"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal for Event Details */}
        {selectedEvent && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50" onClick={() => setSelectedEvent(null)}>
            <div className="bg-white rounded-lg max-w-2xl w-full p-8 shadow-2xl" onClick={(e) => e.stopPropagation()}>
              <div className="flex items-center justify-between mb-4">
                <span className={`text-lg font-bold ${selectedEvent.isPhilip ? 'text-amber-600' : 'text-stone-600'}`}>
                  {selectedEvent.year}
                </span>
                <button 
                  onClick={() => setSelectedEvent(null)}
                  className="text-stone-400 hover:text-stone-600 text-2xl"
                >
                  ×
                </button>
              </div>
              <h2 className="text-3xl font-bold mb-4 font-[family-name:var(--font-playfair)]">{selectedEvent.title}</h2>
              <p className="text-stone-600 mb-6">{selectedEvent.description}</p>
              <div className="bg-stone-100 rounded-lg p-6">
                <h3 className="font-bold text-stone-800 mb-2">The Reality:</h3>
                <p className="text-stone-700 leading-relaxed">{selectedEvent.details}</p>
              </div>
            </div>
          </div>
        )}

        {/* Key Takeaway */}
        <section className="mt-16 bg-stone-800 text-stone-100 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4 font-[family-name:var(--font-playfair)]">Key Insight</h2>
          <p className="text-lg leading-relaxed">
            Notice the pattern: every major Macedonian victory from 356-323 BC was achieved using the army, 
            tactics, and resources that Philip II built over decades. Alexander inherited a war machine 
            fine-tuned by his father. Without Philip&apos;s innovations, there would be no &quot;Alexander the Great.&quot;
          </p>
        </section>
      </main>
    </div>
  );
}
