import './App.css';
import { useNotesStore } from "./NotesContext";
import { useObserver } from "mobx-react";
import {NoteForm} from './NoteForm';

function App() {
  const notesStore = useNotesStore();
  console.log(JSON.stringify(notesStore.notes))
  return useObserver(() => (
    <div className="App">
    <ul>
     {notesStore.notes.map(note => (
       <li key={note.id}>
         <div>{note.text}</div>
         <button onClick={() => notesStore.removeNote(note.id)}>Remove</button>
           <button className={note.done ? 'green' : 'red'} onClick={() => notesStore.markDone(note.id)}>{note.done ? 'Done' : 'Not done yet'}</button>
       </li>
     ))}
    </ul>
    <NoteForm></NoteForm>
    </div>
  ));
}

export default App;
