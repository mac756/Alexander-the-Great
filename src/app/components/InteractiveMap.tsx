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
  casualties: string;
}

const conquestPoints: ConquestPoint[] = [
  {
    id: "macedonia",
    name: "Macedonia",
    x: 52,
    y: 45,
    year: "336 BC",
    description: "Alexander's starting point - inherited from Philip II",
    significance: "Already a powerful kingdom thanks to Philip's military reforms",
    casualties: "Inherited: 0 (Philip's foundation)"
  },
  {
    id: "granicus",
    name: "Granicus River",
    x: 58,
    y: 48,
    year: "334 BC",
    description: "First major victory in Asia Minor",
    significance: "Used Philip's phalanx tactics to defeat Persian forces",
    casualties: "Persians: 5,000-6,000 killed; Macedonians: ~350"
  },
  {
    id: "issus",
    name: "Issus",
    x: 65,
    y: 52,
    year: "333 BC",
    description: "Defeat of Darius III",
    significance: "Philip's combined arms tactics prevailed again",
    casualties: "Persians: ~30,000; Macedonians: ~7,000"
  },
  {
    id: "gaugamela",
    name: "Gaugamela",
    x: 72,
    y: 50,
    year: "331 BC",
    description: "Decisive battle conquering Persia",
    significance: "The culmination of Philip's military innovations",
    casualties: "Persians: ~40,000-90,000; Macedonians: ~1,000-3,000"
  }
];

export default function InteractiveMap() {
  const [selectedPoint, setSelectedPoint] = useState<ConquestPoint | null>(null);
  const [hoveredPoint, setHoveredPoint] = useState<string | null>(null);

  return (
    <div className="w-full">
      <div className="relative bg-stone-100 rounded-xl overflow-hidden shadow-2xl border-4 border-amber-700">
        <svg viewBox="0 0 100 70" className="w-full h-full">
          {/* Mediterranean Sea */}
          <path
            d="M5,20 Q15,15 25,20 L28,50 Q30,65 25,68 L10,70 Q5,65 5,55 Z"
            fill="#a8c5d9"
            stroke="#5a7a96"
            strokeWidth="0.5"
          />
          
          {/* Land masses */}
          <path
            d="M20,40 L35,35 L45,40 L40,55 L25,60 Z"
            fill="#d4c4a8"
            stroke="#8b7355"
            strokeWidth="0.5"
          />
          
          <path
            d="M45,35 L70,40 L75,55 L60,60 L45,55 Z"
            fill="#d4c4a8"
            stroke="#8b7355"
            strokeWidth="0.5"
          />
          
          <path
            d="M70,40 L85,45 L90,55 L80,65 L70,60 Z"
            fill="#d4c4a8"
            stroke="#8b7355"
            strokeWidth="0.5"
          />
          
          {/* Conquest Route */}
          <path
            d="M52,45 Q55,42 58,48 Q62,50 65,52 Q68,52 72,50"
            fill="none"
            stroke="#dc2626"
            strokeWidth="1"
            strokeDasharray="2,1"
          />
          
          {/* Conquest Points */}
          {conquestPoints.map((point) => (
            <g key={point.id}>
              <circle
                cx={point.x}
                cy={point.y}
                r={hoveredPoint === point.id ? 4 : 2.5}
                fill={selectedPoint?.id === point.id ? "#dc2626" : "#d97706"}
                stroke="#5c4033"
                strokeWidth="1"
                className="cursor-pointer transition-all duration-200"
                onMouseEnter={() => setHoveredPoint(point.id)}
                onMouseLeave={() => setHoveredPoint(null)}
                onClick={() => setSelectedPoint(point)}
              />
              <text
                x={point.x}
                y={point.y - 6}
                textAnchor="middle"
                fontSize="2"
                fill="#5c4033"
                fontWeight="bold"
                className="pointer-events-none"
              >
                {point.name}
              </text>
            </g>
          ))}
        </svg>
      </div>
      
      {selectedPoint && (
        <div className="mt-6 bg-stone-50 p-6 rounded-lg shadow-lg border-2 border-amber-700">
          <div className="flex items-center gap-3 mb-3">
            <h3 className="text-2xl font-bold text-stone-800">{selectedPoint.name}</h3>
            <span className="bg-amber-700 text-white px-3 py-1 rounded text-sm font-bold">{selectedPoint.year}</span>
          </div>
          <p className="text-stone-700 text-lg mb-2">{selectedPoint.description}</p>
          <p className="text-stone-600 mb-3"><span className="font-semibold">Significance:</span> {selectedPoint.significance}</p>
          <div className="bg-red-50 border-l-4 border-red-600 p-3 rounded">
            <p className="text-red-800 font-semibold text-sm">⚔️ Casualties: {selectedPoint.casualties}</p>
          </div>
        </div>
      )}
    </div>
  );
}
