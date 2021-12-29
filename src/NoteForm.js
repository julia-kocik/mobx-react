import { useState } from "react";
import { useNotesStore } from "./NotesContext";

export const NoteForm = () => {
    const [note, setNote] = useState('');
    const notesStore = useNotesStore();
    const handleSubmit = (e) => {
        e.preventDefault();
        notesStore.addNote(note)
        setNote('')
    }
    return (
        <>
        <input type="text" value={note} onChange={(e) => setNote(e.target.value)} placeholder='type note'></input>
        <button onClick={handleSubmit}>Add Note</button>
        <button onClick={notesStore.removeAll}>Clear all</button>
        </>
    )
}