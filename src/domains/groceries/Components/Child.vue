<template>
  <div>
    <input v-model="message" placeholder="test..">
    <button disabled>defineModel is two way automatic</button>
  </div>
</template>

<script setup>
// import { ref } from 'vue';

// const emit = defineEmits(['updateMessage']);

// const message = ref('');

// const emitEvent = () => {
//   console.log("testing............") 
//   emit('updateMessage', message.value)
// };

const message = defineModel()

</script>
