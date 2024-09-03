module.exports = (app) => {
    const UserController = app.src.controllers.UserController;
    app.get("/", UserController.home);
    app.post("/users", UserController.store);
}