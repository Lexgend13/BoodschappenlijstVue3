<template>
  <Child v-model="message" />
  <p>Huidig bericht: {{ message }}</p>
</template>

<script setup>
import { ref } from 'vue';
import Child from '../Components/Child.vue';
const message = defineModel();
// todo: definemodel toevoegen
// en gebruiken (koppelen aan een input box met v-model)
</script>
