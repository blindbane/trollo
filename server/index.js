const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Hello World!'));

const PORT = process.env.PORT || 1337;
app.listen(PORT, () => console.log(`Server is now listening on http://localhost:${PORT}`));
