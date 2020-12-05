const express = require('express');
const api = express.Router();

api.get('/users', (req, res) => {
    res.json('Hola loko');
});

module.exports = api; 