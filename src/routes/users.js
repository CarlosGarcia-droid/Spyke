const express = require('express');
const router = express.Router();

router.get('/api/users', function(req, res) {    
    res.json('User list');
});


router.get('/', function(req, res) {
    res.json("Pagina principal");
});