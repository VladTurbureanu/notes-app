<script setup>
import {useNotesStore} from "@/stores/notes-store";
import NoteItem from "@/components/NoteItem.vue";

const useStore = useNotesStore()
const notes = useStore.notes
</script>

<script>
export function addNote() {

}
</script>

<template>
  <h1>Name List</h1>
  <ul>
    <li v-for="note in notes" :key="note">
      <NoteItem :noteTitle= note.title :noteText= note.text />
    </li>
  </ul>
</template>
