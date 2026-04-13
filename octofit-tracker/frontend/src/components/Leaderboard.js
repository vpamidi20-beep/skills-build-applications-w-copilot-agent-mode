import React from 'react';

const Leaderboard = () => {
  const [leaderboard, setLeaderboard] = React.useState([]);

  React.useEffect(() => {
    const endpoint = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/leaderboard/`;
    console.log('Fetching Leaderboard from:', endpoint);
    fetch(endpoint)
      .then(res => res.json())
      .then(data => {
        const results = Array.isArray(data) ? data : data.results || [];
        setLeaderboard(results);
        console.log('Fetched Leaderboard:', data);
      })
      .catch(err => console.error('Error fetching leaderboard:', err));
  }, []);

  return (
    <div>
      <h2>Leaderboard</h2>
      <ul>
        {leaderboard.map((entry, idx) => (
          <li key={entry.id || idx}>{JSON.stringify(entry)}</li>
        ))}
      </ul>
    </div>
  );
};

export default Leaderboard;
