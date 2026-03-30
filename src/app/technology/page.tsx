'use client';

import React from 'react';
import Link from 'next/link';

const technologies = [
  {
    name: 'Spear/Sarissa',
    macedonian: {
      title: 'Sarissa',
      value: '18ft (5.5m)',
      description: 'Two-handed pike requiring both hands to wield',
      svg: <svg viewBox="0 0 100 20" className="w-full h-8"><line x1="5" y1="10" x2="95" y2="10" stroke="#8b6914" strokeWidth="3"/><polygon points="95,10 85,6 85,14" fill="#8b6914"/></svg>
    },
    persian: {
      title: 'Short Spear',
      value: '6-8ft (2-2.5m)',
      description: 'One-handed thrusting weapon with shield',
      svg: <svg viewBox="0 0 100 20" className="w-full h-8"><line x1="40" y1="10" x2="60" y2="10" stroke="#8b0000" strokeWidth="3"/><polygon points="60,10 55,7 55,13" fill="#8b0000"/></svg>
    }
  },
  {
    name: 'Formation',
    macedonian: {
      title: 'Phalanx',
      value: '16x16 Grid',
      description: 'Massive rectangular formation with overlapping spears',
      svg: <svg viewBox="0 0 100 100" className="w-full h-20"><g fill="#8b6914" opacity="0.8"><circle cx="20" cy="20" r="8"/><circle cx="40" cy="20" r="8"/><circle cx="60" cy="20" r="8"/><circle cx="80" cy="20" r="8"/><circle cx="20" cy="40" r="8"/><circle cx="40" cy="40" r="8"/><circle cx="60" cy="40" r="8"/><circle cx="80" cy="40" r="8"/><circle cx="20" cy="60" r="8"/><circle cx="40" cy="60" r="8"/><circle cx="60" cy="60" r="8"/><circle cx="80" cy="60" r="8"/><circle cx="20" cy="80" r="8"/><circle cx="40" cy="80" r="8"/><circle cx="60" cy="80" r="8"/><circle cx="80" cy="80" r="8"/></g></svg>
    },
    persian: {
      title: 'Line Formation',
      value: 'Single Rank',
      description: 'Extended line with gaps between units',
      svg: <svg viewBox="0 0 100 100" className="w-full h-20"><g fill="#8b0000" opacity="0.8"><rect x="10" y="35" width="14" height="30"/><rect x="28" y="35" width="14" height="30"/><rect x="46" y="35" width="14" height="30"/><rect x="64" y="35" width="14" height="30"/><rect x="82" y="35" width="14" height="30"/></g></svg>
    }
  },
  {
    name: 'Armor',
    macedonian: {
      title: 'Linen Corselet',
      value: 'Linen Layers',
      description: 'Multi-layered linen armor, lighter and flexible',
      svg: <svg viewBox="0 0 100 100" className="w-full h-20"><path d="M35 20 L65 20 L70 50 L65 90 L50 95 L35 90 L30 50 Z" fill="#8b6914" stroke="#5c4033" strokeWidth="2"/><line x1="35" y1="35" x2="65" y2="35" stroke="#5c4033"/><line x1="33" y1="50" x2="67" y2="50" stroke="#5c4033"/><line x1="35" y1="65" x2="65" y2="65" stroke="#5c4033"/></svg>
    },
    persian: {
      title: 'Scale Armor',
      value: 'Bronze Scales',
      description: 'Overlapping metal scales sewn to leather backing',
      svg: <svg viewBox="0 0 100 100" className="w-full h-20"><path d="M35 20 L65 20 L70 50 L65 90 L50 95 L35 90 L30 50 Z" fill="#8b0000" stroke="#5c4033" strokeWidth="2"/><g fill="#d4af37" opacity="0.6"><rect x="32" y="25" width="6" height="8"/><rect x="39" y="25" width="6" height="8"/><rect x="46" y="25" width="6" height="8"/><rect x="53" y="25" width="6" height="8"/><rect x="60" y="25" width="6" height="8"/><rect x="32" y="40" width="6" height="8"/><rect x="39" y="40" width="6" height="8"/><rect x="46" y="40" width="6" height="8"/><rect x="53" y="40" width="6" height="8"/><rect x="60" y="40" width="6" height="8"/><rect x="32" y="55" width="6" height="8"/><rect x="39" y="55" width="6" height="8"/><rect x="46" y="55" width="6" height="8"/><rect x="53" y="55" width="6" height="8"/><rect x="60" y="55" width="6" height="8"/><rect x="32" y="70" width="6" height="8"/><rect x="39" y="70" width="6" height="8"/><rect x="46" y="70" width="6" height="8"/><rect x="53" y="70" width="6" height="8"/><rect x="60" y="70" width="6" height="8"/></g></svg>
    }
  },
  {
    name: 'Siege',
    macedonian: {
      title: 'Torsion Catapults',
      value: '60lb Stones',
      description: 'Revolutionary siege engines developed by engineers',
      svg: <svg viewBox="0 0 100 100" className="w-full h-20"><rect x="20" y="60" width="60" height="30" fill="#5c4033"/><rect x="30" y="30" width="40" height="35" fill="#8b6914"/><circle cx="50" cy="50" r="8" fill="#d4af37"/><line x1="50" y1="50" x2="70" y2="20" stroke="#8b0000" strokeWidth="2"/><circle cx="70" cy="20" r="3" fill="#d4af37"/></svg>
    },
    persian: {
      title: 'Battering Rams',
      value: 'Basic Rams',
      description: 'Traditional ramming devices on wheels',
      svg: <svg viewBox="0 0 100 100" className="w-full h-20"><rect x="15" y="50" width="50" height="25" fill="#8b0000"/><rect x="65" y="45" width="20" height="35" fill="#5c4033"/><circle cx="25" cy="75" r="8" fill="#333"/><circle cx="55" cy="75" r="8" fill="#333"/></svg>
    }
  },
  {
    name: 'Cavalry',
    macedonian: {
      title: 'Companion Cavalry',
      value: 'Heavy Shock',
      description: 'Elite heavy cavalry for decisive charges',
      svg: <svg viewBox="0 0 100 80" className="w-full h-16"><path d="M20 50 Q30 20 45 25 Q50 15 60 20 Q70 15 75 25 Q80 30 75 50 L70 70 L60 65 L55 70 L50 60 L30 65 L25 55 Z" fill="#8b6914"/><circle cx="70" cy="25" r="8" fill="#8b6914"/></svg>
    },
    persian: {
      title: 'Light Cavalry',
      value: 'Skirmishers',
      description: 'Fast, mobile archers and harassers',
      svg: <svg viewBox="0 0 100 80" className="w-full h-16"><path d="M25 50 Q35 25 50 30 Q55 20 65 25 Q75 20 80 30 Q85 35 80 50 L75 65 L65 60 L60 65 L55 55 L35 60 L30 50 Z" fill="#8b0000"/><circle cx="75" cy="30" r="6" fill="#8b0000"/></svg>
    }
  }
];

const stats = [
  { value: '18ft', label: 'Sarissa Length' },
  { value: '20', label: 'Years of Development' },
  { value: '0', label: 'Alexander\'s Inventions' }
];

export default function TechnologyPage() {
  return (
    <div className="min-h-screen bg-[#f4e4bc] p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="text-center mb-12 border-b-4 border-[#8b6914] pb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-[#5c4033] mb-4">
            Military Technology: Macedonian vs Persian Warfare
          </h1>
          <p className="text-xl text-[#5c4033] italic">
            The innovations that conquered an empire
          </p>
        </header>

        {/* Technology Comparisons */}
        <div className="space-y-12 mb-16">
          {technologies.map((tech) => (
            <div key={tech.name} className="bg-white/40 rounded-lg p-6 border-2 border-[#8b6914]">
              <h2 className="text-2xl font-bold text-[#5c4033] mb-6 text-center border-b-2 border-[#d4af37] pb-2">
                {tech.name}
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                {/* Macedonian */}
                <div className="bg-[#8b6914]/10 rounded-lg p-6 border-l-4 border-[#8b6914]">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">M</span>
                    <h3 className="text-xl font-bold text-[#5c4033]">
                      Macedonian: {tech.macedonian.title}
                    </h3>
                  </div>
                  <div className="mb-4">
                    {tech.macedonian.svg}
                  </div>
                  <p className="text-2xl font-bold text-[#8b6914] mb-2">
                    {tech.macedonian.value}
                  </p>
                  <p className="text-[#5c4033]">
                    {tech.macedonian.description}
                  </p>
                </div>

                {/* Persian */}
                <div className="bg-[#8b0000]/10 rounded-lg p-6 border-l-4 border-[#8b0000]">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">P</span>
                    <h3 className="text-xl font-bold text-[#5c4033]">
                      Persian: {tech.persian.title}
                    </h3>
                  </div>
                  <div className="mb-4">
                    {tech.persian.svg}
                  </div>
                  <p className="text-2xl font-bold text-[#8b0000] mb-2">
                    {tech.persian.value}
                  </p>
                  <p className="text-[#5c4033]">
                    {tech.persian.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Statistics */}
        <section className="bg-[#5c4033] rounded-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-[#d4af37] text-center mb-8">
            Innovation Statistics
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center p-6 bg-[#f4e4bc] rounded-lg">
                <p className="text-5xl font-bold text-[#8b6914] mb-2">{stat.value}</p>
                <p className="text-[#5c4033] font-semibold">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Key Insight */}
        <section className="bg-[#d4af37]/20 rounded-lg p-8 border-2 border-[#d4af37] mb-12">
          <h2 className="text-2xl font-bold text-[#5c4033] mb-4">
            Key Insight
          </h2>
          <p className="text-lg text-[#5c4033]">
            Alexander&apos;s genius lay not in inventing new technologies, but in perfectly combining 
            existing innovations. The sarissa, developed by his father Philip II, combined with 
            torsion artillery and heavy cavalry to create an unstoppable military machine. 
            Philip spent 20 years developing these systems before Alexander ever took command.
          </p>
        </section>

        {/* Navigation */}
        <nav className="flex flex-wrap justify-center gap-4 border-t-4 border-[#8b6914] pt-8">
          <Link 
            href="/"
            className="px-6 py-3 bg-[#5c4033] text-[#d4af37] rounded-lg font-semibold hover:bg-[#8b6914] transition-colors"
          >
            Home
          </Link>
          <Link 
            href="/battles"
            className="px-6 py-3 bg-[#8b6914] text-white rounded-lg font-semibold hover:bg-[#5c4033] transition-colors"
          >
            Major Battles
          </Link>
          <Link 
            href="/legacy"
            className="px-6 py-3 bg-[#8b0000] text-white rounded-lg font-semibold hover:bg-[#5c4033] transition-colors"
          >
            Cultural Legacy
          </Link>
          <Link 
            href="/myth"
            className="px-6 py-3 bg-[#d4af37] text-[#5c4033] rounded-lg font-semibold hover:bg-[#8b6914] hover:text-white transition-colors"
          >
            Myth vs Reality
          </Link>
        </nav>

        {/* Footer */}
        <footer className="text-center mt-12 text-[#5c4033]/70">
          <p>Alexander the Great: Conqueror or Lucky General? | Technology Comparison</p>
        </footer>
      </div>
    </div>
  );
}
