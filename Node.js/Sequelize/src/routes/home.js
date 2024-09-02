module.exports = (app) => {
    const UserController = app.src.controllers.UserController;
    app.post("/users", UserController.store);
}