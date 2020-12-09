const app = require('./app');
const { connect } = require('./database')

let port = process.env.PORT || 4000;

async function main(){
    await connect();
    console.log('Conectado a la base de datos');

    app.listen(port);
    console.log('Server on port 4000');
}


main();