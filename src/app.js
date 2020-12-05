const express = require('express');
const peticionesRoutes = require('./routes/users');
const app = express();


app.use('/peticiones', peticionesRoutes); 

module.exports = app;