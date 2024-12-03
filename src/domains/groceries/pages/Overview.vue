<script setup>
  import { getAllGroceries, getGroceriesById, addGrocery } from '../../../store/Groceries.js';
  import { tasks, people } from '../../../store/Groceries.js';
  import { computed, ref } from 'vue';  
  const products = ref(getAllGroceries.value);
  console.log(people)
  // console.log(products)
  const total = computed(() => products.value.reduce((acc, item) => acc += item.quantity * item.price, 0))
  // console.log(total)

  const newName = ref('');
  const newAge = ref('');
  const children = ref([]);
  var errorMessage = ref('');
  
  function changeCompleted (task) {
    console.log(task.completed);
    task.completed = !task.completed
  } 
  const addInputs = () => {
    if (newName.value == '' || newAge.value == '') {
      errorMessage.value = "(at least) one of the input fields is empty"
    } else {
      if (newAge.value > 17) {
      people.value.push({name: newName.value, age: newAge.value})
      } else {
        children.value.push({name: newName.value, age: newAge.value})
      }
      // opdracht 6, Vue; stappenplan, computed met .filter()
      // children.value = people.value.filter((person) => person.age < 18 )
      // people.value = people.value.filter((person) => person.age >= 18)
      console.log("children: ", children)
      newName.value = newAge.value = '';
      errorMessage.value = '';
    }
  }
</script>

<template>
  <a style="font-size: 30px; color: #c00;">Boodschappenlijst</a><br>
  <table style="border:3px solid #c00; color: #000;" id="table">
    <tr>
      <th class="red">Product</th>
      <th class="red">Prijs</th>
      <th class="red">Aantal</th>
      <th class="red">Subtotaal</th>
    </tr>
    <tr v-for="product in products">
      <td class="black">{{ product.name }}</td>
      <td class="black">{{ product.price.toFixed(2) }}</td>
      <td class="black"><input type="number" style="width: 41px;" v-model="product.quantity"/></td>
      <td class="black">{{ (product.price*product.quantity).toFixed(2) }}</td>
    </tr>
    <tr>
      <th class="red" colspan="3">Totaal</th>
      <td style="border:2px solid;">{{ total.toFixed(2) }}</td>
    </tr>
  </table><br>
  <ul>
    <li v-for="task in tasks">
      <a :style="{ color: task.completed ? 'green' : 'red' }" @click="changeCompleted(task)">
      {{ task.name }} is {{ task.completed ? 'gedaan' : 'nog niet gedaan' }}
      </a>
    </li>
  </ul>
  <h3>People</h3>
  <p v-for="(person, index) in people" :key="index">This is {{ person.name }}, {{ person.age }} years old</p>
  <h3>Children</h3>
  <p v-for="(child, index) in children" :key="index">This is {{ child.name }}, {{ child.age }} years old</p>
  <form>
    <input v-model="newName" placeholder="Naam" required>
    <input v-model="newAge" placeholder="Leeftijd" required/>
    <button @click.prevent="addInputs()">Add person</button>
    <p v-if="errorMessage.length > 0" class="red">{{ errorMessage }}</p>
  </form>
  <!-- <p v-if="errorMessage" class="red">{{ errorMessage }}</p> -->
</template>

<style>
    .red {
        border: 2px solid #c00
    }
    .black {
        border: 2px solid
    }
</style>