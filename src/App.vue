<script setup>
import { RouterLink } from 'vue-router';


</script>

<template>
   <p>
    <strong>Current route path:</strong> 
  </p>
  <nav>
    <RouterLink to="/">Home</RouterLink><br>
    <RouterLink to="/groceries/create">Groceries</RouterLink><br>
    <RouterLink to="/defmodel">Defmodel</RouterLink><br>
    <RouterLink to="defprops-emit">Def Props Emit</RouterLink>
  </nav>
  <main>
    <RouterView />
  </main>
</template>
