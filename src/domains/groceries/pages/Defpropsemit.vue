<template>
    <Childprops @updateMessage = "handleMessage"/>
    <a>Message van kindcomponent: {{ message }}</a>
</template>

<script setup>
    import {ref} from 'vue'
    import Childprops from '../Components/Childprops.vue'
    const message = ref('');

    const handleMessage = (newMessage) => {
        message.value = newMessage;
        console.log('tested', message.value)
    };
</script>