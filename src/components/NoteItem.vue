<script setup>
import {useNotesStore} from "@/stores/notes-store";

defineProps({
  noteTitle: {
    type: String,
    required: true
  },
  noteText: {
    type: String,
    required: true
  },
  noteIndex: {
    type: Number,
    required: true
  }
})
const useStore = useNotesStore()

/**
 * Deletes a note in the array
 * @param index Array index of the note to be deleted
 */
function deleteNote(index){
  // splice is called here to keep reactivity
  // the list will be updated live
  useStore.notes.splice(index,1);
}
</script>

<script>
export default {
  methods: {
    /**
     * Forwards the note to the NoteView Component where it will be edited by the user
     * @param title Title of the note to be edited.
     * @param text  Content of the note to be edited.
     * @param index Index of the note to be edited
     */
    forwardNote(title, text, index) {
      this.$router.push({name: 'add-note2', params: {noteTitle: title, noteText: text, noteIndex: index}});
    }
  }
}
</script>

<template>
  <div class="details">
    <h3>{{ noteTitle }}</h3>
    <div>{{ noteText }}</div>
  </div>
  <div class = "buttons-container">
    <button class="edit-button" @click="forwardNote(noteTitle,noteText,noteIndex)">Edit</button>
    <button class="delete-button" @click="deleteNote(noteIndex)">Delete</button>
  </div>
</template>

<style scoped>

.details {
  flex: 1;
  text-align: justify;
}

.buttons-container{
  display: flex;
  justify-content: flex-end;
}
.edit-button {
  background-color: #ADD8E6;
  border: none;
  color: white;
  margin-top: 10px;
  text-align: center;
  display: inline-block;
  font-size: 15px;
  border-radius: 4px;
  cursor: pointer;
}

.edit-button:hover {
  background-color: #6592A6;
}

.delete-button {
  background-color: #FFAEB9;
  border: none;
  color: white;
  margin-top: 10px;
  text-align: center;
  display: inline-block;
  font-size: 15px;
  border-radius: 4px;
  cursor: pointer;
  margin-left: 5px;
}

.delete-button:hover {
  background-color: #DD0000;
}
</style>
