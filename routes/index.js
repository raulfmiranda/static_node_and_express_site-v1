const express = require('express');
const router = express.Router();
const { data } = require('../data/flashcardData.json');
// const cards = data.cards;
const { cards } = data;

const colors = [
    'red',
    'white',
    'black'
];

router.get('/', (req, res) => {
    res.render('index');
});

router.post('/hello', (req, res) => {
    res.cookie('username', req.body.username);
    // res.clearCookie('username');
    // res.redirect('/');
    res.render('hello', { name: req.body.username, colors: colors } );
});

// hello/0?side=question
router.get('/hello/:id', (req, res) => {
    // res.locals.variable2 = "This is variable2 value.";
    // res.render('hello', { variable1: 'This is variable1 value.', colors: colors });
    // res.render('index', { variable1: 'This is variable1 value.', hint: 'This is a hint' });
    const id = req.params.id;
    const { side } = req.query;
    const text = cards[id][side];

    res.render('hello', { name: req.cookies.username, colors: colors, text: text, id: id } );
});

module.exports = router;