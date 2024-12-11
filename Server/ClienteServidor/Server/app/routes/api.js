module.exports = (app) => {
    app.get("/api/getAllNotes", (req, res) => {
        app.app.controllers.api.getAllNotes(app, req, res);
    })
}