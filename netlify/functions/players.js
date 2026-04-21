exports.handler = async function (event, context) {
  try {
    const response = await fetch('https://api.sleeper.app/v1/players/nfl');
    const data = await response.json();
    const players = Object.values(data)
      .filter(p => p.position === 'QB' && p.active)
      .sort((a, b) => (a.search_rank || 9999) - (b.search_rank || 9999))
      .slice(0, 25);
    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(players),
    };
  } catch (e) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to fetch from Sleeper API.' }),
    };
  }
};
