import { createWebHistory, createRouter } from 'vue-router'

import GroceriesOverview from '../domains/groceries/pages/Overview.vue'
import GroceriesCreate from '../domains/groceries/pages/Create.vue'
import GroceriesEdit from '../domains/groceries/pages/Edit.vue'

const routes = [
  { path: '/', component: GroceriesOverview },
  { path: '/groceries/create', component: GroceriesCreate },
  { path: '/groceries/edit/:id', component: GroceriesEdit },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})

