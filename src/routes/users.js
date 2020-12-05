const express = require('express');
const api = express.Router();
const User = require('../models/Peticiones');

const faker = require('faker');


api.get('/listarPeticiones', async (req, res) => {
    const users = await( User.find() );
    res.json(users);
});

api.get('/crearPeticiones', async (req, res) => {

    
    for(let i = 0; i < 5; i++){
        await(User.create({
            idPeticion: faker.random.alphaNumeric(),
            nombre: faker.name.jobTitle(),
            descripcion: faker.name.jobDescriptor()
        }));
    }

    res.json({message: '5 peticiones creadas'});

});

module.exports = api; 