const { Schema, model }  = require('mongoose');


const peticionSchema = new Schema({
    idPeticion: String,
    nombre:     String,
    descripcion:String
});



module.exports = model('Peticion', peticionSchema);