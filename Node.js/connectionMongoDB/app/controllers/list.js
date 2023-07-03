module.exports.index = (app, req, res) => {
    const connection = app.config.dbConnection;

    const context = new app.app.models.AlunosDB(connection);

    context.listarAlunos()
    .then((result) => {
        res.render("listAlunos", {alunos: result});
    }) 
    .catch((error) => {
        res.send(error);
    });

    
};

module.exports.rm = (app, req, res) => {
    const id = req.query.id;
    console.log(id);
    const connection = require("../../config/dbConnection");
    const model = new app.app.models.AlunosDB(connection);

    model.rmAluno(id);
    res.redirect("/list");
}