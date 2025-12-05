import React, {useState, useEffect} from "react";
import PetCard from "./components/PetCard";
import {loadState, saveState} from "./utils/storage";
import "./styles/App.css";

const KEY = "pocket-pet-state";
const DEFAULT = {happiness: 5, hunger: 5, energy: 5, mood: "happy"};

function computeMood({ happiness, hunger, energy }) {
  // Best first
  if (happiness >= 9 && energy >= 8 && hunger <= 4)
    return "excited";

  // Next: hungry
  if (hunger > 7)
    return "hungry";

  // Sad is rare now
  if (happiness < 3 && energy < 2)
    return "sad";

  // Default
  return "happy";
}



function App(){
  const [pet, setPet] = useState(loadState(KEY, DEFAULT));

  useEffect(() => saveState(KEY, pet), [pet]);


  const update = (changes) => {
  setPet(prev => {
    const applied = typeof changes === "function" ? changes(prev) : changes;
    const next = {...prev, ...applied};

    next.mood = computeMood(next);

    // clamp values 0..10
    next.happiness = Math.max(0, Math.min(10, next.happiness));
    next.hunger = Math.max(0, Math.min(10, next.hunger));
    next.energy = Math.max(0, Math.min(10, next.energy));

    return next;
  });
};

  return (
    <div className="app">
      <header className="app-header"><h1>Pocket Pet</h1></header>
      <main>
        <PetCard pet={pet} />
        <div className="controls">
          <button onClick={() => update(prev => ({ happiness: prev.happiness + 2 }))}>
  Play
</button>

<button onClick={() => update(prev => ({ hunger: prev.hunger - 2 }))}>
  Feed
</button>

<button onClick={() => update(prev => ({ energy: prev.energy + 3 }))}>
  Nap
</button>


        </div>
        <button className="reset-btn" onClick={() => setPet(DEFAULT)}>
        Reset Pet
        </button>

      </main>
      <footer className="app-footer">Made by Dinithi</footer>
    </div>
  );
}

export default App;
