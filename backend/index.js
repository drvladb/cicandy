const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/test', (req, res) => {
    res.json({ hello: 'world' });
});

const port = process.env.PORT || 3001;
const server = app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});

module.exports = { app, server };
