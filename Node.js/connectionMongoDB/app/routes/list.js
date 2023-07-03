module.exports = (app) => {
    app.get('/list', (req, res) => {
        app.app.controllers.list.index(app, req, res);
    });

    app.get('/list/rm', (req, res) => {
        app.app.controllers.list.rm(app, req, res);
    });
}