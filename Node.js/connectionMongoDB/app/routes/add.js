module.exports = (app) => {
    app.get('/add', (req, res) => {
        app.app.controllers.app.index(app, req, res);
    });

    app.post('/add/novoAluno', (req, res) => {
        app.app.controllers.app.cadastrar(app, req, res);
    });
}