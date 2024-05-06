const express = require('express');
const cors = require('cors');
const errorMiddleware = require('./middlewares/error.middleware');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/v1', require('./routes/v1'));

app.use(errorMiddleware);
module.exports = app;
