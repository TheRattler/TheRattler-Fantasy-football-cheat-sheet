const express = require('express');
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Sample scoring rules
const scoringRules = {
    touchdown: 6,
    fieldGoal: 3,
    interception: -2,
};

// Endpoint to get scoring rules
app.get('/api/scoring', (req, res) => {
    res.json(scoringRules);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
