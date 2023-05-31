<script setup>
import {useNotesStore} from "@/stores/notes-store";
import NoteItem from "@/components/NoteItem.vue";

const useStore = useNotesStore()
const notes = useStore.notes
let index = 0;
</script>

<template>
  <h1>List of Notes</h1>
  <ul>
    <li v-for="note in notes" :key="note">
      <NoteItem :noteTitle= note.title :noteText= note.text :noteIndex=index++ />
    </li>
  </ul>
</template>
