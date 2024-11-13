<script setup>

</script>

<template>
   <p>
    <strong>Current route path:</strong> 
  </p>
  <nav>
    <RouterLink to="/">Home</RouterLink><br>
    <RouterLink to="/groceries/create">Groceries</RouterLink>
  </nav>
  <main>
    <RouterView />
  </main>
</template>
