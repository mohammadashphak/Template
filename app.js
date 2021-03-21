// import modules
const express = require('express');
const fs = require('fs');
const mongoose = require('mongoose');
const path = require('path');

// import routes
const indexRouter = require('./routes/index');
const db = require('./model/db');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// use routes
app.use('/', indexRouter);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// Home Page
app.get('/', (req, res) => {
    res.render('index', { title: 'Express' });
});

const port = process.env.PORT || '3000';

// listen app
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});