const express = require('express');
const { user,score,game } = require('./models');
const { Sequelize, Op } = require('sequelize');


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

app.post('/find-game', async (req,res) => {
    const { day } = req.body; // Ensure 'day' is in 'YYYY-MM-DD' format

    try {
        const challenge = await game.findOne({
            where: Sequelize.where(Sequelize.fn('date', Sequelize.col('createdAt')), '=', day)
        });

        if (challenge) {
            res.json(challenge);
        } else {
            res.status(404).send('Game not found for the specified date.');
        }
    } catch (error) {
        console.error('Search failed:', error);
        res.status(500).send('An error occurred while searching for the game.');
    }
})

app.post('/game', async (req,res) => {
    const {goodOne, goodTwo, goodThree, goodFour, goodFive, badOne, badTwo, badThree, badFour, badFive} = req.body;
    const newGame = game.create({goodOne, goodTwo, goodThree, goodFour, goodFive, badOne, badTwo, badThree, badFour, badFive})
    res.send(newGame);
})


app.post

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

