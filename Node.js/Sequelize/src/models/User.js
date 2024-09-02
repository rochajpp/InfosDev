const { Model, DataTypes } = require("sequelize");

class User extends Model {
    static init(sequelize){ // Método padrão do sequelize
        super.init({ //Método de Model
            //Não é preciso informar o ID e nem o created_at e updated_at
            name: DataTypes.STRING,
            email: DataTypes.STRING,
        }, {
            /*
            Conexão com o banco de dados
            sequelize: connection => Caso o parametro tenha outro nome
            será necessário fazer sequelize receber o parametro de conexão
            */

            /*
            Se o parametro for passado com o nome sequelize ele já irá ser 
            atribuido ao objeto de configuração do banco de dados automaticamente
            */

            sequelize
        }) 
    }
}

module.exports = User;