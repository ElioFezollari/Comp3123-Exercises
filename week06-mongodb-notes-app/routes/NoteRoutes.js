const Note = require('../models/NotesModel.js');
const noteRouter = require('express').Router()
//TODO - Create a new Note
//http://mongoosejs.com/docs/api.html#document_Document-save
noteRouter.post('',async (req, res) => {
    const {noteTitle,noteDescription,priority} = req.body
    // Validate request
    if(!req.body.content) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }
    if(!noteTitle || !noteDescription || !priority){
        return res.status(400).send({
            message:"Note needs to have a title description and priority"
        })
    }
    if(priority !== "HIGH" && priority !== "MEDIUM" && priority !== "LOW"){
        return res.status(400).send({
            message:"Please add a valid priority"
        })
    }

    try{
    //TODO - Write your code here to save the note
    const note = await Note({
        noteTitle,
        noteDescription,
        priority
    })
    await note.save()
    res.status(201).send({message: "Created new note " + note.noteTitle}) 
} catch(err){
    res.status(400).send({message:"Sorry, there was an error uploading your note"})
}  
});

//TODO - Retrieve all Notes
//http://mongoosejs.com/docs/api.html#find_find
noteRouter.get('', async (req, res) => {
    try {
        const notes = await Note.find();
        res.status(200).send(notes);
    } catch (error) {
        res.status(500).send({message: "Sorry there was an error getting all notes." + error});
    }

});

//TODO - Retrieve a single Note with noteId
//http://mongoosejs.com/docs/api.html#findbyid_findById
noteRouter.get('/:noteId', async (req, res) => {
    const noteId = req.params.noteId;

    try{
        const note = await Note.findById(noteId)
        if(!note){
            return res.status(404).send({message:"Note with that id cannot be found."})
        }
        return res.status(200).send(note)
    }
    catch(e){
        return res.status(500).send("Sorry there was an error with getting your note")
    }
});

//TODO - Update a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandupdate_findByIdAndUpdate
noteRouter.put('/:noteId', async (req, res) => {
    const noteId = req.params.noteId;
    const { noteTitle, noteDescription, priority } = req.body;

    if(!req.body.content) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }

    if(priority !== "HIGH" || priority !== "MEDIUM" || priority !== "LOW"){
        return res.status(400).send({
            message:"Please add a valid priority"
        })

    }
    try{
    const noteUpdated = await Note.findByIdAndUpdate(
        noteId,
        {
            noteTitle,
            noteDescription,
            priority: priority,
            dateUpdated: Date.now() 
        },
    );
    if(!noteUpdated){
        res.status(400).send({message:"Sorry could not find that note by Id"})
    }
    else{
        res.status(200).send({message:"Note updated Successfully",note:noteUpdated})
    }
}
catch(e){
    res.status(500).send({message:"Sorry there was an error updating note"})
}
});

//TODO - Delete a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandremove_findByIdAndRemove
noteRouter.delete('/:noteId', async (req, res) => {
    const noteId = req.params.noteId;

    try {
        const deletedNote = await Note.findByIdAndDelete(noteId);
        if (!deletedNote) {
            return res.status(404).send({
                message: "Note with that ID cannot be found."
            });
        }
        return res.status(200).send({
            message: "Note deleted successfully."
        });
    } catch (error) {return res.status(500).send({message: "Sorry, there was an error deleting the note.",});
    }
});


module.exports = {noteRouter}