<script>
import {useNotesStore} from "@/stores/notes-store";

const useStore = useNotesStore()
export default {
  methods: {
    /**
     * Called by the 'submit-button', it saves the changes done by the user and
     * either creates a new note, if this component was accessed via the 'Add note' button
     * or edits an existing note if this component was accessed via the 'Edit' button in the note list
     * @param title Title of the note
     * @param text  Content of the note
     * @param index Index of the note
     */
     submitNote(title, text, index){
        if(this.edit){
          // if editing is enabled, edit an existing note
          useStore.editNote(title, text, index)
        }else{
          // if editing is not enabled then add a note
          useStore.addNote(title, text)
        }
        this.$router.push('/')
    }
  },
  data() {
    // default values
    return {
      noteTitle:"Title",
      noteText:"Note text",
      noteIndex:-1, // noteIndex is not used when creating a new note
      edit:false
    };
  },
  mounted() {
    // If the parameters are defined, it means that this component (NoteView) was forwarded from the NoteItem component
    // via the 'Edit' button, which means an existing note is edited, so we initialize the 'input-line' and 'text-area'
    // fields with its already existing content from the storage
    if(this.$route.params.noteTitle && this.$route.params.noteText && this.$route.params.noteIndex) {
      this.noteTitle = this.$route.params.noteTitle;
      this.noteText = this.$route.params.noteText;
      this.noteIndex = this.$route.params.noteIndex;
      this.edit = true;
    }
  }
}
</script>

<template>
  <div class="add-note">
    <div class="form">
      <h3>Title:</h3>
      <input class="input-line" v-model="noteTitle"  />
      <h3>Text:</h3>
      <textarea class = "text-area" v-model="noteText"
                onfocus='this.style.height = ""; this.style.height = this.scrollHeight + "px"'
                onfocusout='this.style.height = "";' >
      </textarea>
      <button class="submit-button" @click="submitNote(noteTitle,noteText,noteIndex)">Submit</button>
    </div>
  </div>
</template>

<style>
.add-note {
  min-height: 100vh;
  display: flex;
  align-items: center;
}
.form {
  display: flex;
  flex-direction: column;
}
.input-line{
  width: 100%;
  margin-bottom: 10px;
}
.text-area{
  min-width: 30em;
  height: auto;
}
.submit-button {
  background-color: #ADD8E6;
  border: none;
  color: white;
  padding: 10px 20px;
  margin-top: 10px;
  text-align: center;
  display: inline-block;
  font-size: 15px;
  border-radius: 4px;
  cursor: pointer;
}

.submit-button:hover {
  background-color: #6592A6;
}

</style>
