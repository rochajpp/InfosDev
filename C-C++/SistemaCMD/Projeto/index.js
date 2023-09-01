const express = require("express");
const app = express();

app.use(express.static("./public"));

app.get("/", (req, res) => {
    const path = require("path");

    res.sendFile(path.join(__dirname, "index.html"))
});

app.listen("80", () => {
    console.log("Server On");
})