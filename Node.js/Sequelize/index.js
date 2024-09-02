const app = require("./src/config/server");

const port = 8080;

app.listen(port, () => {
    console.log("Server on");
})