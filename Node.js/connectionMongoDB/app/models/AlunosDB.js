function AlunosDB(connection){
    this._connection = connection;
    
}

AlunosDB.prototype.listarAlunos = async function (){       
    const db = await this._connection.conectar();
    const collection = db.collection('alunos');
    const result = await collection.find().toArray();
    this._connection.fecharConexao();
    return result;
};

AlunosDB.prototype.adicionarAluno = async function(nome, idade){
    const db = await this._connection.conectar();
    const collection = db.collection('alunos');
    await collection.insertOne({Nome: nome, Idade: idade});
    this._connection.fecharConexao();
};

AlunosDB.prototype.rmAluno =  async function(id){
    const {ObjectId} = require('mongodb');
    const db = await this._connection.conectar();
    const collection = db.collection('alunos');
    await collection.deleteOne({_id: new ObjectId(id)})
    this._connection.fecharConexao();
}

module.exports = () => {
    return AlunosDB;
}

  
