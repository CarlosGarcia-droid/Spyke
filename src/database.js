const mongoose = require('mongoose');

async function connect(){
    await mongoose.connect('mongodb://localhost/spikeDomotica', {
        useNewUrlParser : true,
        useUnifiedTopology: true
    });  
};

module.exports = { connect };