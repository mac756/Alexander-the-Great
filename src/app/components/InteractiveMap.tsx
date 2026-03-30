"use client";

import { useState } from "react";

interface ConquestPoint {
  id: string;
  name: string;
  x: number;
  y: number;
  year: string;
  description: string;
  significance: string;
}

const conquestPoints: ConquestPoint[] = [
  {
    id: "macedonia",
    name: "Macedonia",
    x: 52,
    y: 45,
    year: "336 BC",
    description: "Alexander's starting point - inherited from Philip II",
    significance: "Already a powerful kingdom thanks to Philip's military reforms"
  },
  {
    id: "granicus",
    name: "Granicus River",
    x: 58,
    y: 48,
    year: "334 BC",
    description: "First major victory in Asia Minor",
    significance: "Used Philip's phalanx tactics to defeat Persian forces"
  },
  {
    id: "issus",
    name: "Issus",
    x: 65,
    y: 52,
    year: "333 BC",
    description: "Defeat of Darius III",
    significance: "Philip's combined arms tactics prevailed again"
  },
  {
    id: "gaugamela",
    name: "Gaugamela",
    x: 72,
    y: 50,
    year: "331 BC",
    description: "Decisive battle conquering Persia",
    significance: "The culmination of Philip's military innovations"
  },
  {
    id: "persepolis",
    name: "Persepolis",
    x: 75,
    y: 55,
    year: "330 BC",
    description: "Burning of the Persian capital",
    significance: "Symbolic end of Persian Empire, but political mismanagement"
  },
  {
    id: "bactria",
    name: "Bactria & Sogdiana",
    x: 82,
    y: 42,
    year: "329-327 BC",
    description: "Brutal campaigns in Central Asia",
    significance: "Costly wars showing administrative failures; no lasting governance"
  },
  {
    id: "indus",
    name: "Indus Valley",
    x: 88,
    y: 58,
    year: "326 BC",
    description: "Invasion of India",
    significance: "Army mutinied - showed Alexander's poor leadership"
  }
];

export default function InteractiveMap() {
  const [selectedPoint, setSelectedPoint] = useState<ConquestPoint | null>(null);
  const [hoveredPoint, setHoveredPoint] = useState<string | null>(null);

  return (
    <div className="w-full">
      <div className="relative bg-stone-200 rounded-lg overflow-hidden" style={{ aspectRatio: "16/9" }}>
        <svg viewBox="0 0 100 70" className="w-full h-full">
          <path d="M10,20 Q15,15 25,20 L25,60 Q15,65 10,60 Z" fill="#93c5fd" opacity="0.5" />
          <path d="M25,40 L35,38 L40,42 L38,48 L30,50 L25,48 Z" fill="#d6d3d1" stroke="#78716c" strokeWidth="0.5" />
          <path d="M40,35 L60,38 L62,50 L55,55 L45,52 L40,45 Z" fill="#d6d3d1" stroke="#78716c" strokeWidth="0.5" />
          <path d="M62,40 L85,42 L88,55 L80,60 L65,58 L62,50 Z" fill="#d6d3d1" stroke="#78716c" strokeWidth="0.5" />
          <path d="M80,35 L95,38 L95,50 L85,52 L80,45 Z" fill="#d6d3d1" stroke="#78716c" strokeWidth="0.5" />
          <path d="M52,45 L58,48 L65,52 L72,50 L75,55 L82,42 L88,58" fill="none" stroke="#dc2626" strokeWidth="0.8" strokeDasharray="2,1" opacity="0.6" />
          {conquestPoints.map((point) => (
            <g key={point.id}>
              <circle cx={point.x} cy={point.y} r={hoveredPoint === point.id ? 2.5 : 2} fill={selectedPoint?.id === point.id ? "#dc2626" : "#d97706"} stroke="white" strokeWidth="0.5" className="cursor-pointer" onMouseEnter={() => setHoveredPoint(point.id)} onMouseLeave={() => setHoveredPoint(null)} onClick={() => setSelectedPoint(point)} />
              {hoveredPoint === point.id && (
                <text x={point.x} y={point.y - 3} textAnchor="middle" fontSize="3" fill="#1c1917" fontWeight="bold">{point.name}</text>
              )}
            </g>
          ))}
          <text x="30" y="47" fontSize="2.5" fill="#57534e">Greece</text>
          <text x="50" y="45" fontSize="2.5" fill="#57534e">Asia Minor</text>
          <text x="72" y="52" fontSize="2.5" fill="#57534e">Persia</text>
          <text x="87" y="40" fontSize="2.5" fill="#57534e">Bactria</text>
          <text x="15" y="40" fontSize="2.5" fill="#57534e" fontStyle="italic">Mediterranean</text>
        </svg>
        <div className="absolute bottom-4 left-4 bg-white/90 rounded-lg p-3 shadow-lg text-sm">
          <div className="flex items-center gap-2 mb-1"><div className="w-3 h-3 rounded-full bg-amber-600"></div><span>Conquest Points</span></div>
          <div className="flex items-center gap-2"><div className="w-8 h-0.5 bg-red-600" style={{borderTop: "2px dashed #dc2626"}}></div><span>Route</span></div>
        </div>
      </div>
      {selectedPoint ? (
        <div className="mt-4 bg-white rounded-lg shadow-md p-6 border-l-4 border-amber-600">
          <div className="flex justify-between items-start">
            <div><span className="text-amber-600 font-bold text-sm">{selectedPoint.year}</span><h3 className="text-xl font-bold text-stone-800 mt-1">{selectedPoint.name}</h3></div>
            <button onClick={() => setSelectedPoint(null)} className="text-stone-400 hover:text-stone-600 text-2xl">×</button>
          </div>
          <p className="text-stone-700 mt-3">{selectedPoint.description}</p>
          <div className="mt-4 bg-stone-100 rounded p-4"><span className="text-red-700 font-semibold text-sm">Reality Check:</span><p className="text-stone-700 mt-1">{selectedPoint.significance}</p></div>
        </div>
      ) : (
        <div className="mt-4 bg-stone-100 rounded-lg p-4 text-center text-stone-600">Click on a point on the map to learn about Alexander's conquests.</div>
      )}
      <div className="mt-6 grid grid-cols-3 gap-4">
        <div className="bg-white rounded-lg shadow p-4 text-center"><p className="text-3xl font-bold text-amber-600">10</p><p className="text-sm text-stone-600">Years of Conquest</p></div>
        <div className="bg-white rounded-lg shadow p-4 text-center"><p className="text-3xl font-bold text-red-700">2</p><p className="text-sm text-stone-600">Years Empire Lasted</p></div>
        <div className="bg-white rounded-lg shadow p-4 text-center"><p className="text-3xl font-bold text-stone-700">0</p><p className="text-sm text-stone-600">Original Innovations</p></div>
      </div>
    </div>
  );
}
