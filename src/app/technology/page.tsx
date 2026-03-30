'use client';

import React, { useState } from 'react';
import Link from 'next/link';

interface TechnologySide {
  title: string;
  value: string;
  description: string;
}

interface Technology {
  name: string;
  macedonian: TechnologySide;
  persian: TechnologySide;
}

const technologies: Technology[] = [
  {
    name: 'Spear/Sarissa',
    macedonian: {
      title: 'Sarissa',
      value: '18ft (5.5m)',
      description: 'Two-handed pike requiring both hands to wield'
    },
    persian: {
      title: 'Short Spear',
      value: '6-8ft (2-2.5m)',
      description: 'One-handed thrusting weapon used with shield'
    }
  },
  {
    name: 'Formation',
    macedonian: {
      title: 'Phalanx',
      value: '16x16 Grid',
      description: 'Massive rectangular formation with overlapping spears'
    },
    persian: {
      title: 'Line Formation',
      value: 'Single Rank',
      description: 'Extended line with gaps between units'
    }
  },
  {
    name: 'Armor',
    macedonian: {
      title: 'Bronze Muscle Cuirass',
      value: 'Heavy Bronze',
      description: 'Solid bronze breastplate molded to the body'
    },
    persian: {
      title: 'Scale Armor & Linen Corselet',
      value: 'Bronze/Iron Scales',
      description: 'Bronze/iron scales on leather, or multi-layered linen armor'
    }
  },
  {
    name: 'Siege',
    macedonian: {
      title: 'Torsion Catapults',
      value: '60lb Stones',
      description: 'Revolutionary siege engines developed by engineers'
    },
    persian: {
      title: 'Battering Rams',
      value: 'Basic Rams',
      description: 'Traditional ramming devices on wheels'
    }
  },
  {
    name: 'Cavalry',
    macedonian: {
      title: 'Companion Cavalry',
      value: 'Heavy Shock',
      description: 'Elite heavy cavalry for decisive charges'
    },
    persian: {
      title: 'Light Cavalry',
      value: 'Skirmishers',
      description: 'Fast, mobile archers and harassers'
    }
  }
];

const stats = [
  { value: '18ft', label: 'Sarissa Length' },
  { value: '20', label: 'Years of Development' },
  { value: '0', label: 'Alexander\'s Inventions' }
];

// 3D Spear Component
function Spear3D({ isMacedonian }: { isMacedonian: boolean }) {
  const [hovered, setHovered] = useState(false);
  
  return (
    <div 
      className="relative h-20 w-full flex items-center justify-center cursor-pointer"
      style={{ perspective: '500px' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div 
        className="relative transition-transform duration-500"
        style={{
          transformStyle: 'preserve-3d',
          transform: hovered ? 'rotateY(15deg) rotateX(5deg)' : 'rotateY(0deg) rotateX(0deg)'
        }}
      >
        {isMacedonian ? (
          <div className="relative flex items-center">
            <div 
              className="w-48 h-3 rounded-sm"
              style={{
                background: 'linear-gradient(90deg, #5c4033 0%, #8b6914 50%, #5c4033 100%)',
                boxShadow: '2px 2px 5px rgba(0,0,0,0.3), inset 0 1px 2px rgba(255,255,255,0.3)'
              }}
            />
            <div 
              className="w-8 h-5 -ml-1"
              style={{
                clipPath: 'polygon(0% 50%, 100% 0%, 100% 100%)',
                background: 'linear-gradient(90deg, #d4af37 0%, #f4e4bc 50%, #d4af37 100%)',
                boxShadow: '2px 2px 8px rgba(0,0,0,0.4)'
              }}
            />
          </div>
        ) : (
          <div className="relative flex items-center">
            <div 
              className="w-24 h-3 rounded-sm"
              style={{
                background: 'linear-gradient(90deg, #5c4033 0%, #8b6914 50%, #5c4033 100%)',
                boxShadow: '2px 2px 5px rgba(0,0,0,0.3), inset 0 1px 2px rgba(255,255,255,0.3)'
              }}
            />
            <div 
              className="w-5 h-4 -ml-1"
              style={{
                clipPath: 'polygon(0% 50%, 100% 0%, 100% 100%)',
                background: 'linear-gradient(90deg, #8b0000 0%, #a52a2a 50%, #8b0000 100%)',
                boxShadow: '2px 2px 8px rgba(0,0,0,0.4)'
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
}

// 3D Formation Component
function Formation3D({ isMacedonian }: { isMacedonian: boolean }) {
  const [hovered, setHovered] = useState(false);
  
  return (
    <div 
      className="relative h-20 w-full flex items-center justify-center cursor-pointer"
      style={{ perspective: '600px' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div 
        className="relative transition-transform duration-500"
        style={{
          transformStyle: 'preserve-3d',
          transform: hovered ? 'rotateX(20deg) rotateY(-15deg)' : 'rotateX(10deg) rotateY(-5deg)'
        }}
      >
        {isMacedonian ? (
          <div 
            className="grid grid-cols-4 gap-1 p-2 rounded"
            style={{
              background: '#5c4033',
              boxShadow: '4px 4px 12px rgba(0,0,0,0.4), inset 2px 2px 4px rgba(255,255,255,0.1)'
            }}
          >
            {[...Array(16)].map((_, i) => (
              <div 
                key={i}
                className="w-8 h-8 rounded-full"
                style={{
                  background: 'radial-gradient(circle at 30% 30%, #d4af37, #8b6914)',
                  boxShadow: '2px 2px 4px rgba(0,0,0,0.5), inset -1px -1px 2px rgba(0,0,0,0.3)',
                  transform: 'translateZ(8px)'
                }}
              />
            ))}
          </div>
        ) : (
          <div 
            className="flex gap-2 p-2 rounded"
            style={{
              background: '#4a0000',
              boxShadow: '4px 4px 12px rgba(0,0,0,0.4), inset 2px 2px 4px rgba(255,255,255,0.1)'
            }}
          >
            {[...Array(5)].map((_, i) => (
              <div 
                key={i}
                className="w-6 h-12 rounded-sm"
                style={{
                  background: 'linear-gradient(180deg, #8b0000 0%, #a52a2a 50%, #8b0000 100%)',
                  boxShadow: '2px 2px 4px rgba(0,0,0,0.5), inset -1px -1px 2px rgba(0,0,0,0.3)',
                  transform: 'translateZ(5px)'
                }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

// 3D Armor Component
function Armor3D({ isMacedonian }: { isMacedonian: boolean }) {
  const [hovered, setHovered] = useState(false);
  
  return (
    <div 
      className="relative h-24 w-full flex items-center justify-center cursor-pointer"
      style={{ perspective: '500px' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div 
        className="relative transition-transform duration-500"
        style={{
          transformStyle: 'preserve-3d',
          transform: hovered ? 'rotateY(15deg) rotateX(-5deg)' : 'rotateY(5deg) rotateX(-5deg)'
        }}
      >
        {isMacedonian ? (
          <div 
            className="w-24 h-20 rounded-lg relative"
            style={{
              background: 'radial-gradient(ellipse at 50% 30%, #d4af37 0%, #8b6914 40%, #5c4033 100%)',
              boxShadow: 
                '4px 4px 15px rgba(0,0,0,0.5), ' +
                'inset 2px 2px 8px rgba(255,255,255,0.3), ' +
                'inset -2px -2px 8px rgba(0,0,0,0.3)',
              transform: 'translateZ(10px)'
            }}
          >
            {/* Muscle definition lines */}
            <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-16 h-0.5 bg-[#5c4033]/50" />
            <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-18 h-0.5 bg-[#5c4033]/50" />
            <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-16 h-0.5 bg-[#5c4033]/50" />
            <div className="absolute top-14 left-1/2 transform -translate-x-1/2 w-12 h-0.5 bg-[#5c4033]/50" />
          </div>
        ) : (
          <div className="relative">
            {/* Scale armor on leather backing */}
            <div 
              className="w-24 h-20 rounded-lg relative"
              style={{
                background: '#3d2817',
                boxShadow: '4px 4px 15px rgba(0,0,0,0.5)',
                transform: 'translateZ(10px)'
              }}
            >
              {/* Scale pattern */}
              <div className="absolute inset-2 grid grid-cols-4 gap-0.5">
                {[...Array(16)].map((_, i) => (
                  <div 
                    key={i}
                    className="w-5 h-5 rounded-sm"
                    style={{
                      background: 'linear-gradient(135deg, #d4af37 0%, #8b6914 50%, #5c4033 100%)',
                      boxShadow: '1px 1px 3px rgba(0,0,0,0.4)',
                      transform: 'translateZ(2px)'
                    }}
                  />
                ))}
              </div>
            </div>
            <div className="mt-1 text-xs text-center text-[#5c4033] opacity-70">Scale + Linen</div>
          </div>
        )}
      </div>
    </div>
  );
}

// 3D Siege Component
function Siege3D({ isMacedonian }: { isMacedonian: boolean }) {
  const [hovered, setHovered] = useState(false);
  
  return (
    <div 
      className="relative h-24 w-full flex items-center justify-center cursor-pointer"
      style={{ perspective: '600px' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div 
        className="relative transition-transform duration-500"
        style={{
          transformStyle: 'preserve-3d',
          transform: hovered ? 'rotateY(-15deg) rotateX(10deg)' : 'rotateY(-5deg) rotateX(5deg)'
        }}
      >
        {isMacedonian ? (
          <div className="relative">
            {/* Catapult base */}
            <div 
              className="w-28 h-16 rounded"
              style={{
                background: 'linear-gradient(180deg, #5c4033 0%, #3d2817 100%)',
                boxShadow: '4px 4px 15px rgba(0,0,0,0.5), inset 2px 2px 8px rgba(255,255,255,0.1)',
                transform: 'translateZ(15px)'
              }}
            >
              {/* Torsion arms */}
              <div 
                className="absolute -top-2 left-4 w-4 h-20 rounded-full"
                style={{
                  background: 'linear-gradient(90deg, #8b6914 0%, #d4af37 50%, #8b6914 100%)',
                  boxShadow: '2px 2px 5px rgba(0,0,0,0.4)',
                  transform: 'rotateX(20deg)'
                }}
              />
              <div 
                className="absolute -top-2 right-4 w-4 h-20 rounded-full"
                style={{
                  background: 'linear-gradient(90deg, #8b6914 0%, #d4af37 50%, #8b6914 100%)',
                  boxShadow: '2px 2px 5px rgba(0,0,0,0.4)',
                  transform: 'rotateX(20deg)'
                }}
              />
              {/* Basket */}
              <div 
                className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-8 h-6 rounded"
                style={{
                  background: '#8b6914',
                  boxShadow: '2px 2px 5px rgba(0,0,0,0.4)'
                }}
              />
            </div>
          </div>
        ) : (
          <div className="relative">
            {/* Battering ram structure */}
            <div 
              className="w-32 h-14 rounded relative"
              style={{
                background: '#3d2817',
                boxShadow: '4px 4px 15px rgba(0,0,0,0.5)',
                transform: 'translateZ(15px)'
              }}
            >
              {/* Roof */}
              <div 
                className="absolute -top-3 left-0 w-full h-6"
                style={{
                  background: 'linear-gradient(180deg, #8b0000 0%, #5c0000 100%)',
                  clipPath: 'polygon(0% 100%, 10% 0%, 90% 0%, 100% 100%)',
                  boxShadow: '2px 2px 5px rgba(0,0,0,0.4)'
                }}
              />
              {/* Ram beam */}
              <div 
                className="absolute top-1/2 -right-8 transform -translate-y-1/2 w-12 h-4 rounded"
                style={{
                  background: 'linear-gradient(90deg, #5c4033 0%, #3d2817 100%)',
                  boxShadow: '2px 2px 5px rgba(0,0,0,0.4)'
                }}
              />
              {/* Wheels */}
              <div 
                className="absolute -bottom-3 left-4 w-6 h-6 rounded-full"
                style={{
                  background: '#2a2a2a',
                  boxShadow: '2px 2px 4px rgba(0,0,0,0.5)'
                }}
              />
              <div 
                className="absolute -bottom-3 right-4 w-6 h-6 rounded-full"
                style={{
                  background: '#2a2a2a',
                  boxShadow: '2px 2px 4px rgba(0,0,0,0.5)'
                }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// 3D Cavalry Component
function Cavalry3D({ isMacedonian }: { isMacedonian: boolean }) {
  const [hovered, setHovered] = useState(false);
  
  return (
    <div 
      className="relative h-24 w-full flex items-center justify-center cursor-pointer"
      style={{ perspective: '500px' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div 
        className="relative transition-transform duration-500"
        style={{
          transformStyle: 'preserve-3d',
          transform: hovered ? 'rotateY(-20deg) rotateX(5deg)' : 'rotateY(-10deg) rotateX(0deg)'
        }}
      >
        <div 
          className="relative w-28 h-16"
          style={{
            transform: 'translateZ(10px)'
          }}
        >
          {/* Horse body */}
          <div 
            className="absolute top-4 left-4 w-16 h-8 rounded"
            style={{
              background: isMacedonian 
                ? 'linear-gradient(180deg, #8b6914 0%, #5c4033 100%)'
                : 'linear-gradient(180deg, #8b0000 0%, #5c0000 100%)',
              boxShadow: '3px 3px 8px rgba(0,0,0,0.4), inset 1px 1px 3px rgba(255,255,255,0.2)'
            }}
          />
          {/* Horse head */}
          <div 
            className="absolute top-2 right-2 w-6 h-6 rounded"
            style={{
              background: isMacedonian ? '#8b6914' : '#8b0000',
              clipPath: 'polygon(30% 0%, 100% 20%, 100% 80%, 30% 100%)',
              boxShadow: '2px 2px 5px rgba(0,0,0,0.4)'
            }}
          />
          {/* Rider */}
          <div 
            className="absolute top-0 left-8 w-5 h-6 rounded"
            style={{
              background: isMacedonian 
                ? 'radial-gradient(circle at 30% 30%, #d4af37, #8b6914)'
                : 'radial-gradient(circle at 30% 30%, #a52a2a, #8b0000)',
              boxShadow: '2px 2px 4px rgba(0,0,0,0.4)'
            }}
          />
          {/* Legs */}
          <div 
            className="absolute bottom-0 left-6 w-2 h-5 rounded-sm"
            style={{
              background: isMacedonian ? '#5c4033' : '#5c0000',
              boxShadow: '1px 1px 3px rgba(0,0,0,0.4)'
            }}
          />
          <div 
            className="absolute bottom-0 left-12 w-2 h-5 rounded-sm"
            style={{
              background: isMacedonian ? '#5c4033' : '#5c0000',
              boxShadow: '1px 1px 3px rgba(0,0,0,0.4)'
            }}
          />
          <div 
            className="absolute bottom-0 right-8 w-2 h-5 rounded-sm"
            style={{
              background: isMacedonian ? '#5c4033' : '#5c0000',
              boxShadow: '1px 1px 3px rgba(0,0,0,0.4)'
            }}
          />
          <div 
            className="absolute bottom-0 right-4 w-2 h-5 rounded-sm"
            style={{
              background: isMacedonian ? '#5c4033' : '#5c0000',
              boxShadow: '1px 1px 3px rgba(0,0,0,0.4)'
            }}
          />
        </div>
      </div>
    </div>
  );
}

const render3DModel = (techName: string, isMacedonian: boolean) => {
  switch (techName) {
    case 'Spear/Sarissa':
      return <Spear3D isMacedonian={isMacedonian} />;
    case 'Formation':
      return <Formation3D isMacedonian={isMacedonian} />;
    case 'Armor':
      return <Armor3D isMacedonian={isMacedonian} />;
    case 'Siege':
      return <Siege3D isMacedonian={isMacedonian} />;
    case 'Cavalry':
      return <Cavalry3D isMacedonian={isMacedonian} />;
    default:
      return null;
  }
};

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
                    {render3DModel(tech.name, true)}
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
                    {render3DModel(tech.name, false)}
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
            href="/timeline"
            className="px-6 py-3 bg-[#8b6914] text-white rounded-lg font-semibold hover:bg-[#5c4033] transition-colors"
          >
            Timeline
          </Link>
          <Link 
            href="/philip-factor"
            className="px-6 py-3 bg-[#8b0000] text-white rounded-lg font-semibold hover:bg-[#5c4033] transition-colors"
          >
            The Philip Factor
          </Link>
          <Link 
            href="/comparison"
            className="px-6 py-3 bg-[#d4af37] text-[#5c4033] rounded-lg font-semibold hover:bg-[#8b6914] hover:text-white transition-colors"
          >
            vs Napoleon
          </Link>
          <Link 
            href="/sources"
            className="px-6 py-3 bg-stone-600 text-white rounded-lg font-semibold hover:bg-[#5c4033] transition-colors"
          >
            Sources
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
