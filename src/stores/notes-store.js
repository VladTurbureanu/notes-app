import { defineStore } from 'pinia'

export const useNotesStore = defineStore('notes', () => {

  /**
   * A note contains a title and a text
   */
  class Note{
    get title() {
      return this._title;
    }
    get text() {
      return this._text;
    }
    constructor ( title, text) {
      this._title = title;
      this._text = text;
    }
  }

  // We initialize the array with 2 hardcoded notes
  const notes = [new Note ("First Note", "Simple Example."),
                         new Note ("Lorem Ipsum", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras euismod sed velit in accumsan. " +
                                     "Nunc eu ipsum vel ante accumsan malesuada. " +
                                     "Nullam interdum sed arcu cursus laoreet. Sed ac aliquam massa. " +
                                     "Curabitur ac justo porttitor, laoreet lectus ut, scelerisque quam. " +
                                     "Ut viverra sit amet lacus et ultricies. Maecenas sit amet nisi turpis.")
                        ];


  /**
   * Adds a note to the array
   * @param title Title of the note
   * @param text  Text content of the note
   */
  function addNote(title, text){
    notes.push(new Note (title, text))
  }

  /**
   * Edits an existing note
   * @param title Replacement title for the note
   * @param text  Replacement text  for the note
   * @param index  Array index of the note to be edited
   */
  function editNote(title, text, index){
    notes[index] = new Note (title, text)
  }

  return { notes, addNote, editNote }
})
