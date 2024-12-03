<template>
  <div>
    <h3>Message: {{ message }}</h3>
  </div>
  <div>
    <button @click="emitEvent">Verzend Bericht</button>
  </div>
  <!-- <Parent :message="message"></Parent> -->
</template>
  
<script setup>
  // import Parent from './Parent.vue'
  // import message from './Parent.vue'
  defineProps({
    message: {
      type: String,
      default: "Gde je srpski Tekeriš"
    }
  });

  defineEmits(['updateMessage']);
  
  const emitEvent = () => {
    $emit('updateMessage', 'Nieuw bericht van het kindcomponent');
  };
</script>