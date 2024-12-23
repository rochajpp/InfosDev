const User = require("../models/User");

module.exports = {
    async store (req, res){
        const {name, email} = req.body;
        const user = await User.create({name, email}); 
        /*
        Como os nomes de variaveis do req.body tem o mesmo nome do campo no Model
        não é preciso escrever da seguinte form {name: name, email: email}
        */

        return res.json(user);
    },

    async home(req, res){
        res.render("home/index.ejs");
    }
}