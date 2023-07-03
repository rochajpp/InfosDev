const {MongoClient} = require('mongodb');

const url = 'mongodb://localhost:27017/mongodbNode';

const client = new MongoClient(url);

async function conectar() {
    try{
        await client.connect();
        console.log('Conexão estabelecida com o MongoDB');
        return client.db();
    } catch(error){
        console.error('Erro ao conectar ao MongoDB: ', error);
        throw error;
    }
}

function fecharConexao(){
    client.close();
    console.log('Conexão com o MongoDB fechada');
}

module.exports = {
    conectar,
    fecharConexao,
};