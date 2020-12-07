const express = require('express');
const api = express.Router();
const Peticion = require('../models/Peticiones');

const faker = require('faker');


api.get('/listarPeticiones', async (req, res) => {
    const peticiones = await( Peticion.find() );
    res.json({peticiones});
});

api.get('/crearPeticiones', async (req, res) => {

    
    for(let i = 0; i < 5; i++){
        await(Peticion.create({
            idPeticion: faker.random.alphaNumeric(),
            nombre: faker.name.jobTitle(),
            descripcion: faker.name.jobDescriptor()
        }));
    }

    res.json({message: '5 peticiones creadas'});

});

module.exports = api; 