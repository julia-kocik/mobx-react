import {nanoid} from 'nanoid';

export function createNotesStore() {
    return {
        notes: [],
        addNote(text) {
            if(text) {
                this.notes.push({text, id: nanoid(), done: false})
            } else {
                alert('Enter some text')
            }
        },
        removeNote(id) {
            this.notes = this.notes.filter(item => item.id !== id)
        },
        removeAll() {
            this.notes = []
        },
        markDone(id) {
            this.notes = this.notes.map(part => part.id === id ? {...part, done: !part.done} : part)
        }
    }
}