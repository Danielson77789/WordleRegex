const express = require('express');
const { user,score,game } = require('./models');

const app = express();
app.use(express.json());

app.get('/users', async (req, res) => {
    const users = await user.findAll()
    res.json(users)
})

app.post('/register', async (req, res) => {
    const { username, password, email } = req.body;
    const newUser = await user.create({ username, password, email });
    res.json(newUser);
})

app.get('/scores', async (req,res) => {
    const scores = await score.findAll();
    res.json(scores);
})

app.post('/submit', async (req,res) => {
    const { guessCount, bestScore, userId } = req.body;
    const scores = await score.create({ guessCount, bestScore, userId })
    res.json(scores);
})


app.post

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

