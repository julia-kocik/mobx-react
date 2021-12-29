import './App.css';
import { useNotesStore } from "./NotesContext";
import { useObserver } from "mobx-react";
import {NoteForm} from './NoteForm';

function App() {
  const notesStore = useNotesStore();
  return useObserver(() => (
    <div className="App">
    <ul>
     {notesStore.notes.map(note => (
       <li onClick={() => notesStore.removeNote(note.id)} key={note.id}>{note.text}</li>
     ))}
    </ul>
    <NoteForm></NoteForm>
    </div>
  ));
}

export default App;
