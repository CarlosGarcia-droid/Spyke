const express = require('express');
const app = express();

//app.use(require('./routes/users'));
app.get('/', (req, res) => {
    res.json('Hola');
});

module.exports = app;