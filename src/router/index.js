import { createRouter, createWebHistory } from 'vue-router'
import NotesListView from "@/views/NotesListView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'notes-list',
      component: NotesListView
    },
    {
      path: '/add-note',
      name: 'add-note',
      // lazy-load when the route is visited
      component: () => import('../views/NoteView.vue')
    },
    {
      path: '/add-note/:noteTitle/:noteText/:noteIndex',
      name: 'add-note2',
      // lazy-load when the route is visited
      component: () => import('../views/NoteView.vue')
    }
  ]
})

export default router
