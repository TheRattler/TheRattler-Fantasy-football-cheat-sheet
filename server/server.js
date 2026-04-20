const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Get real NFL player data from Sleeper API
app.get('/api/players', async (req, res) => {
  try {
    const response = await axios.get('https://api.sleeper.app/v1/players/nfl');
    // Example: get top 25 QBs
    const players = Object.values(response.data)
      .filter(p => p.position === 'QB')
      .slice(0, 25);
    res.json(players);
  } catch (e) {
    res.status(500).json({ error: 'Failed to fetch from Sleeper API.' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
