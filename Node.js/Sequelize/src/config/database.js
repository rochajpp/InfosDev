module.exports = {
    dialect: 'mysql',
    host: "localhost",
    username: "root",
    password: "database",
    database: "sqlnode",
    define: {
        timestamps: true, 
        // Cria automaticamente uam campo created_at e updated_at 
        //para cada tabela
        underscored: true,
        //Nome das tabelas em snake case
    }
};