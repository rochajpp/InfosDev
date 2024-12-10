module.exports = (app) => {
    app.get("/api/getAllTexts", (req, res) => {
        app.app.controllers.api.getAllTexts(app, req, res);
    })
}