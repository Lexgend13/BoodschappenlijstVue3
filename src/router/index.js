import { createWebHistory, createRouter } from 'vue-router'

import GroceriesOverview from '../domains/groceries/pages/Overview.vue'
import GroceriesCreate from '../domains/groceries/pages/Create.vue'
import GroceriesEdit from '../domains/groceries/pages/Edit.vue'
import Defmodel from '../domains/groceries/pages/Defmodel.vue'
import Defpropsemit from '../domains/groceries/pages/Defpropsemit.vue'
//import GroceryForm from '../domains/groceries/Components/GroceryForm.vue'

const routes = [
  { path: '/', component: GroceriesOverview },
  { path: '/groceries/create', component: GroceriesCreate },
  { path: '/groceries/edit/:id', component: GroceriesEdit },
  { path: '/Defmodel', component:  Defmodel},
  { path: '/defprops-emit', component: Defpropsemit},
  //{ path: '/test', component: GroceryForm}
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})

