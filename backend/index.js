const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const scores = [
  { id: 1, team1: "Barcelone", team2: "Real Madrid", score: "2-1" },
  { id: 2, team1: "Athletic Bilbao", team2: "Girone", score: "1-3" },
  { id: 3, team1: "PSG", team2: "Monaco", score: "0-0" },
];

app.get('/scores', (req, res) => {
  res.json(scores);
});

app.post('/scores', (req, res) => {
  const { team1, team2, score } = req.body;

  if (!team1 || !team2 || !score) {
    return res.status(400).json({ error: 'Team1, Team2, and Score are required' });
  }

  const newScore = {
    id: scores.length + 1,
    team1,
    team2,
    score,
  };

  scores.push(newScore);
  res.status(201).json({ message: 'Score added successfully', newScore });
});

app.delete('/scores/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);

  const index = scores.findIndex((score) => score.id === id);

  if (index !== -1) {
    const removedScore = scores.splice(index, 1);
    return res.json({ message: 'Score deleted successfully', removedScore });
  }

  res.status(404).json({ error: 'Score not found' });
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
