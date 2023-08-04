module.exports.main = (app, req, res) => {
    const path = require('path');

    res.sendFile(path.join(__dirname, '..', 'views', 'home.html'));
}