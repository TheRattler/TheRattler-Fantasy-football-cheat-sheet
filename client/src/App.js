import React, { useEffect, useState } from 'react';

function App() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch('/.netlify/functions/players')
      .then(res => res.json())
      .then(setPlayers)
      .catch(console.error);
  }, []);

  return (
    <div style={{padding:40}}>
      <h1>Fantasy Football Cheat Sheet</h1>
      <h2>Top 25 NFL Quarterbacks (Live from Sleeper API)</h2>
      <ul>
        {players.map(p => (
          <li key={p.player_id}>{p.first_name} {p.last_name} - {p.team} #{p.number}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
