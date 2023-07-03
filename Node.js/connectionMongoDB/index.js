const app = require("./config/server");

app.listen('80', () => {  
    console.log("Server listen in http://localhost");
    console.log("Port: 80");
});