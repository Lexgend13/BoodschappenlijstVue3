<template>
    <div>
      <input v-model="message" placeholder="Typ iets..." />
    </div>
  </template>
  
  <script setup>
  defineModel({
    message: String,
  });
  </script>
