const handlebars = require('express-handlebars');
const morgan = require('morgan');
const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

const route = require('./routes');
const db = require('./config/db');

// Connect to DB
db.connect();
app.use(express.static(path.join(__dirname, 'public')));

app.use(
    express.urlencoded({
        extended: true,
    })
); //dạng form
app.use(express.json()); // từ code js lên: XMLHttpRequest, fetch, axios

//HTTP logger
// app.use(morgan("combined"));

// Template engine
app.engine(
    'hbs',
    handlebars({
        extname: '.hbs',
    })
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

// Routes init
route(app);

app.listen(port, () => {
    console.log(`App listening on port http://localhost:${port}`);
});
