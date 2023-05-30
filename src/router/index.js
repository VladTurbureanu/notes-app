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
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AddNoteView.vue')
    }
  ]
})

export default router
