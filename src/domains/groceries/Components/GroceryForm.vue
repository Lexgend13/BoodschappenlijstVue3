<script>
    import { getAllGroceries, getGroceriesById, addGrocery } from '../../../store/Groceries.js';
    import { computed, ref } from 'vue';  
    const grocery = ref();
    console.log(grocery)
</script>


<template>
    <form>
        <label for="name">Product: </label>
        <input v-model="name"
            id="name"
            type="text"
            required><br>
        <label for="price">Price: </label>
        <input v-model="price"
            id="price"
            type="number"
            step="0.01"
            min="0"
            required><br>
        <label>Amount: </label>
        <input v-model="amount"
            type="number"
            min="0"
            required><br>   
        <button type="submit">Add product</button>
    </form>
</template>
