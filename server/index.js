require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./db');
const apiRouter = require('./api');

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// TODO: configure cors for production
app.use(cors());

app.use('/api', apiRouter);

const PORT = process.env.PORT || 1337;
app.listen(PORT, () => console.log(`Server is now listening on http://localhost:${PORT}`));
