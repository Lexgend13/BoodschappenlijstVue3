<template>
  <div>
    <input v-model="message" placeholder="test..">
    <button @click="emitEvent">defineEmits is only a 1 way connection</button>
  </div></template>

<script setup>
    import { ref } from 'vue';

    defineEmits(['update:message']);

    const message = ref('');

    const emitEvent = () => {
    console.log("testing............", message.value) 
    defineEmits('updateMessage', message.value)
};
</script>