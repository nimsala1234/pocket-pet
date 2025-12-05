import React from "react";
import "../petcard.css";
export default function PetCard({pet}) {
  // pet: {happiness, hunger, energy, mood}
  const size = 220;
  return (
    <div className={`pet-card mood-${pet.mood}`}>
      <div className="pet-image" style={{width:size, height:size}}>
        {/* simple SVG circle as placeholder — replace with cute SVG/PNG */}
        <svg viewBox="0 0 100 100" width="100%" height="100%">
          <circle cx="50" cy="50" r="45" fill="#FFD9E8" />
          {/* eyes */}
          <circle cx="35" cy="45" r="5" fill="#222" />
          <circle cx="65" cy="45" r="5" fill="#222" />
          {/* mouth (changes by mood) */}
          {pet.mood === "happy" ? (
            <path d="M30 65 Q50 80 70 65" stroke="#222" strokeWidth="3" fill="none" strokeLinecap="round"/>
          ) : (
            <path d="M30 70 Q50 55 70 70" stroke="#222" strokeWidth="3" fill="none" strokeLinecap="round"/>
          )}
        </svg>
      </div>
      <div className="pet-stats">
        <div>Happiness: {pet.happiness}</div>
        <div>Hunger: {pet.hunger}</div>
        <div>Energy: {pet.energy}</div>
      </div>
    </div>
  );
}
