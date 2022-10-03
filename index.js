const express = require('express');
const bRoute= require('./route/buba-gump');
const cors = require('cors')
// const delay = require('express-delay')
const delayed = require('./route/delayed')

const app = express();

const PORT = 1234;

// app.use(delay(1000)) // default 



app.use('/buba-gump', bRoute)
app.use('/delayed', delayed)
app.use(cors)

app.listen(PORT, () => console.log(`The server is listening on port ${PORT}`));