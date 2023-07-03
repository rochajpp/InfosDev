module.exports.index = (app, req, res) => {

    res.render('add');
}

module.exports.cadastrar = (app, req, res) => {
    const dados = req.body;
    
    const connection = require("../../config/dbConnection");
    const model = new app.app.models.AlunosDB(connection)

    model.adicionarAluno(dados.nome, dados.idade);
    res.redirect('/');
}