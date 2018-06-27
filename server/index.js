require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const cors = require('cors');
const cookieSession = require('cookie-session');
const app = express();
const db = require('./db');
const apiRouter = require('./api');
require('./services/auth');

// TODO: configure cors for production
app.use(cors());

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [process.env.COOKIE_KEY],
  }),
);

app.use(passport.initialize());
app.use(passport.session());

app.use('/api', apiRouter);

const PORT = process.env.PORT || 1337;
app.listen(PORT, () => console.log(`Server is now listening on http://localhost:${PORT}`));
