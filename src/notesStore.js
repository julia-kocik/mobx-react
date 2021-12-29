import {nanoid} from 'nanoid';

export function createNotesStore() {
    return {
        notes: [],
        addNote(text) {
            this.notes.push({text, id: nanoid()})
        },
        removeNote(id) {
            this.notes = this.notes.filter(item => item.id !== id)
        },
        removeAll() {
            this.notes = []
        }
    }
}