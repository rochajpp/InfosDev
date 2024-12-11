module.exports.getAllNotes = async (app, req, res) => {
    const connection = require('../../config/database');

    const Note = new app.app.models.Note(connection);

    const notes = await Note.getAllTexts();

    res.send(notes);
}