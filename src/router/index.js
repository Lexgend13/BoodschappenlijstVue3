import { createWebHistory, createRouter } from 'vue-router'

import GroceriesOverview from '../domains/groceries/pages/Overview.vue'
import GroceriesCreate from '../domains/groceries/pages/Create.vue'
import GroceriesEdit from '../domains/groceries/pages/Edit.vue'
import Parent from '../domains/groceries/pages/Parent.vue'
import Child from '../domains/groceries/pages/Child.vue'
//import GroceryForm from '../domains/groceries/Components/GroceryForm.vue'

const routes = [
  { path: '/', component: GroceriesOverview },
  { path: '/groceries/create', component: GroceriesCreate },
  { path: '/groceries/edit/:id', component: GroceriesEdit },
  { path: '/parent', component: Parent},
  { path: '/child', component: Child},
  //{ path: '/test', component: GroceryForm}
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})

