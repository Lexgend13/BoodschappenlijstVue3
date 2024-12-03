<template>
  <Child :message="message" />

  <Child @updateMessage="handleMessage" />
  <p>Bericht van kindcomponent: {{ message }}</p>
</template>
  
<script setup>
  import Child from './Child.vue';
  
  // const message = "Welkom in Vue 3!"

  import { ref } from 'vue';

  const message = ref('');

  const handleMessage = (newMessage) => {
    console.log(newMessage)
    message.value = newMessage;
  };
</script>