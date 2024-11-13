import { computed, ref } from 'vue';
export const getAllGroceries = computed(() => products.value);
export const getGroceriesById = (id) => computed(() => products.value.find(grocery => grocery.id == id));

export const addGrocery = (grocery) => products.value.push(grocery);

const products = ref([
    {
        name: 'brood',
        price: 0.99,
        quantity: 2
      },
      {
        name: 'appels',
        price: 1.39,
        quantity: 6
      },
      {
        name: 'bananen',
        price: 0.99,
        quantity: 5
      },
      {
        name: 'koek',
        price: 0.99,
        quantity: 9
      },
    ])