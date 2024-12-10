const app = require('./config/server');

const port = process.env.PORT_SERVER || 8080;

app.listen(port, () => {
    console.log("Server listen on: http://localhost:" + port);
});
