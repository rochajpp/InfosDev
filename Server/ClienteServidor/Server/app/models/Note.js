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
}

module.exports = () =>{
    return Note;
}