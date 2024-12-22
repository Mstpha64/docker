import React, { useEffect, useState } from 'react';

function App() {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/api/matches')
      .then(response => response.json())
      .then(data => setMatches(data))
      .catch(error => console.error('Error fetching matches:', error));
  }, []);

  return (
    <div style={{ textAlign: 'center', fontFamily: 'Arial' }}>
      <h1>Match Scores</h1>
      {matches.length > 0 ? (
        <table border="1" style={{ margin: 'auto', borderCollapse: 'collapse', width: '50%' }}>
          <thead>
            <tr>
              <th>Team 1</th>
              <th>Team 2</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {matches.map(match => (
              <tr key={match.id}>
                <td>{match.team1}</td>
                <td>{match.team2}</td>
                <td>{match.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Loading scores...</p>
      )}
    </div>
  );
}

export default App;
