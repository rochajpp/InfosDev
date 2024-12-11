module.exports.getAllNotes = async (app, req, res) => {
    const connection = require('../../config/database');

    const Note = new app.app.models.Note(connection);

    const notes = await Note.getAllTexts();

    res.send(notes);
    return;
}

module.exports.saveNote = async (app, req, res) => {
    const data = req.body;

    const connection = require('../../config/database');
    const Note = new app.app.models.Note(connection);

    const response = await Note.saveNote(data);

    console.log(response.affectedRows);

    res.redirect("http://localhost:5173/");
    return;
}