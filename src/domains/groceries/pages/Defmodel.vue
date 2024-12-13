<template>
  <ChildComponent v-model="message" /> 
  <p>Bericht van kindcomponent: {{ message }}</p>
</template>

<script setup>
import { ref } from 'vue';
import ChildComponent from '../Components/Child.vue';

const message = ref('');

// const handleMessage = (newMessage) => {
//   message.value = newMessage;
// };
</script>