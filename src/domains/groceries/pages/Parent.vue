<template>
  <Child :message="message" />
</template>
  
<script setup>
  import Child from './Child.vue';
  
  const message = "Welkom in Vue 3!"
</script>