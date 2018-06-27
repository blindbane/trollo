require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors')
const db = require('./db');
const apiRouter = require('./api');

// TODO: configure cors for production
app.use(cors())

app.use('/api', apiRouter);

const PORT = process.env.PORT || 1337;
app.listen(PORT, () => console.log(`Server is now listening on http://localhost:${PORT}`));
