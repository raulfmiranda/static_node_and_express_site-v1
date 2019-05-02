/*

const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/static', express.static('public'));
app.set('view engine', 'pug');

app.use((req, res, next) => {
    console.log('One');
    req.message = "This message made it!";
    next();
});

app.use((req, res, next) => {
    console.log('two');
    console.log(req.message);
    next();
});

// app.use((req, res, next) => {
//     console.log('throwing an error');
//     const err = new Error('Oh noes!');
//     next(err);
// });

const routes = require('./routes/oldindex');
// const cardRoutes = require('./routes/cards');
app.use(routes);
// app.use('/cards', cardRoutes);

app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.use((err, req, res, next) => {
    res.locals.error = err;
    res.status(err.status);
    res.render('error');
});

app.listen(3000, () => {
    console.log("This application is running on localhost: 3000!");
});

*/