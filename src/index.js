const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars').engine;
const path = require('path');
const app = express();
const port = 3000;

// HTTP REQUEST
app.use(morgan('combined'));

app.use(express.static(path.join(__dirname, 'public')));

app.engine(
    'hbs',
    handlebars({
        extname: '.hbs',
        helpers: {
            sum: (a, b) => a + b,
        },
    })
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

app.get('/', (req, res) => {
    res.render('home');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
