module.exports.getAllTexts = async (app, req, res) => {
    const connection = require('../../config/database');

    const Text = new app.app.models.Text(connection);

    const texts = await Text.getAllTexts();

    res.send(texts);
}