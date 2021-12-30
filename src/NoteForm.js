import { useState } from "react";
import { useNotesStore } from "./NotesContext";
import {createUseStyles} from 'react-jss';

const useStyles = createUseStyles({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        border: '2px solid black',
        padding: '30px 20px',
        alignItems: 'center',
    },
    buttonElem: {
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 5,
        border: 'none',
        margin: '10px 0',
        width: 150,
        color: 'white',
        '&:hover': {
            backgroundColor: 'lightblue',
            cursor: 'pointer',
        }
    }, 
    inputElem: {
        width: 130,
        borderRadius: 5,
        border: '2px solid blue',
        padding: '10px 8px',
        margin: '10px 0',
    }
  })

export const NoteForm = () => {
    const [note, setNote] = useState('');
    const notesStore = useNotesStore();
    const classes = useStyles()
    const handleSubmit = (e) => {
        e.preventDefault();
        notesStore.addNote(note)
        setNote('')
    }
    const handleOnKeyPress = (e) => {
        if (e.charCode === 13) {
            notesStore.addNote(note)
            setNote('')
        }
    }
    return (
        <div className={classes.container}>
            <input className={classes.inputElem} onKeyPress={handleOnKeyPress} type="text" value={note} onChange={(e) => setNote(e.target.value)} placeholder='type note'></input>
            <button className={classes.buttonElem} conClick={handleSubmit}>Add Note</button>
            <button className={classes.buttonElem} onClick={notesStore.removeAll}>Clear all</button>
        </div>
    )
}