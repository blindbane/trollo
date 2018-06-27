const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Hello World!'));
app.get('/api/trolls', (req, res) =>
  res.send({
    trolls: [
      {
        id: 1,
        description: 'the best troll',
      },
      {
        id: 2,
        description: 'the second best troll',
      },
    ],
  }),
);

const PORT = process.env.PORT || 1337;
app.listen(PORT, () => console.log(`Server is now listening on http://localhost:${PORT}`));
