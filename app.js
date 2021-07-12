require('dotenv').config()
require('./database/client')
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors')

const indexRouter = require('./routes/index');
const pokemonRouter = require('./routes/pokemonRouter');
const fightsRouter = require('./routes/fightRouter')

const app = express();

app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/fights', fightsRouter)
app.use('/pokemon', pokemonRouter);
app.use('/', indexRouter);

module.exports = app;
