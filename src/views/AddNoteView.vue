<script setup>
import {computed} from "vue";

const props = defineProps({
  noteTitle: {
    type: String,
    required: false
  },
  noteText: {
    type: String,
    required: false
  }
})
let newTitle = "Title", newText = "Note text";
let edit = false;

if(props.noteTitle && props.noteText){
  newTitle =  computed(() => (props.noteTitle))
  newText =  computed(() => (props.noteText))
  edit = true;
}

</script>

<script>
import {useNotesStore} from "@/stores/notes-store";

const useStore = useNotesStore()
export default {
  methods: {
     submitNote(title, text){
      useStore.addNote(title, text)
       this.$router.push('/')
    }
  }
}
</script>

<template>
  <div class="add-note">
    <div class="form">
      <h3>Title</h3>
      <input class="input-line" v-model="newTitle" :placeholder="noteTitle" />
      <h3>Text:</h3>
      <textarea class = "text-area" v-model="newText" :placeholder="noteText"></textarea>
      <button class="submit-button" @click="submitNote(newTitle,newText)">Submit</button>
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
}
.submit-button {
  background-color: #00CC99;
  border: none;
  color: white;
  padding: 10px 20px;
  margin-top: 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 4px;
  cursor: pointer;
}

.submit-button:hover {
  background-color: #2980b9;
}

</style>
