import { defineStore } from 'pinia'

export const useNotesStore = defineStore('notes', () => {

  class Note{
    get text() {
      return this._text;
    }
    get title() {
      return this._title;
    }
    constructor ( title, text) {
      this._title = title;
      this._text = text;
    }
  }

  const notes = [new Note ("First", "First Note."), new Note ("Second", "Second Note.")];
  function addNote(title, text){
    notes.push(new Note (title, text))
  }

  return { notes, addNote }
})
