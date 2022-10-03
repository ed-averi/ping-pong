const express = require('express');
const bRoute= require('./route/buba-gump');
const cors = require('cors')

const PORT = 1234;

const app = express();

app.use('/buba-gump', bRoute)
app.use(cors)

app.listen(PORT, () => console.log(`The server is listening on port ${PORT}`));