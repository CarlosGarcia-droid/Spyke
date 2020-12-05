const app = require('./app');
const { connect } = require('./database')

async function main(){
    await connect();
    console.log('Conectado a la base de datos');

    app.listen(4000);
    console.log('Server on port 4000');
}


main();