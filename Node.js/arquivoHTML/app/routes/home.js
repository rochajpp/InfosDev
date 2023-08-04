module.exports = (app) => {

    app.get("/", (req, res) => {
        app.app.controllers.home.main(app, req, res);
    });
}