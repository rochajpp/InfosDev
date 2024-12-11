class Note{
    constructor(connection){
        this._connection = connection;
    }

    async getAllTexts(){
        try{
            const [rows] = await this._connection.query("SELECT * FROM note");
            return rows;
        } catch(err){
            console.err("Error getting data");
            return null;
        }
    }

    async saveNote(note){
        try{
            const [rows] = await this._connection.query("INSERT INTO note (title, text) VALUES ('" + note.title + "', '" + note.text + "')");
            
            return rows;
        }catch(err){
            console.log("Error saving data: " + err);
            return null;
        }
    }
}

module.exports = () =>{
    return Note;
}