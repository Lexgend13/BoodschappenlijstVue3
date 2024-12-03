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

export const tasks = ref([
  { name: 'Boodschappen doen', completed: false},
  { name: 'Afwassen', completed: true},
  { name: 'Hond uitlaten', completed: false},
  { name: 'Stofzuigen', completed:false},
  { name: 'Ontbijten', completed:true},
  { name: 'Douchen', completed:false},
  { name: 'Op tijd zijn bij Script', completed:true},
  { name: 'Sporten', completed:true},
])

export const people = ref([
  { name: "Lex", age: "21"},
  { name: "Kyona", age: "21"},
  { name: "Isa", age: "23"},
  { name: "Olaf", age: "20"},
  { name: "Matthijs", age: "21"}
])

export const children = ref([
  { name: "Lea", age: "16"},
  { name: "Mia", age: "17"},
  { name: "Enime", age: "14"}
])