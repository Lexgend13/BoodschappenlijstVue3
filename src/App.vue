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
    <RouterLink to="/parent">Parent</RouterLink><br>
    <RouterLink to="/child">Child</RouterLink>
  </nav>
  <main>
    <RouterView />
  </main>
</template>
