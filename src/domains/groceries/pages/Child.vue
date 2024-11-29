<template>
  <div>
    <h3>Message: {{ message }}</h3>
  </div>
  <Parent :message="message"></Parent>
</template>
  
<script setup>
  import Parent from './Parent.vue'
  import message from './Parent.vue'
  defineProps({
    message: String,
  });
</script>