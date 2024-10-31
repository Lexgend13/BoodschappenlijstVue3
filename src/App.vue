<script setup>
import { ref } from "vue";
const products = ref([]);
const total = ref(0);

// TODO: gebruik camelCase, dus name, prijs, aantal
const Name = ref("");
const Prijs = ref(0);

const Aantal = ref(0);

// TODO: zet bij voorkeur alle boodschappen code in een apart GroceriesTable component

const addProduct = () => {
  // TODO: probeer vue reactive code te gebruiken ivp native JavaScript. Hint:
  // voorzie de input fields voor invoer van nieuwe boodschap van een v-model en gebruik deze waardes
  // om een nieuwe boodschap toe te voegen
  const Name = document.querySelector("#Name").value;
  const Prijs = parseFloat(document.querySelector("#Prijs").value);
  const Aantal = parseInt(document.querySelector("#Aantal").value);
  const subtotal = Prijs * Aantal;
  console.log(Prijs, "aantal", Aantal, "subtotal", subtotal);
  products.value.push({ Name, Prijs, Aantal });
  console.log(products);

  // totaalprijs via aparte computed property berekeken voor betere indeling code en
  // betere leesbaarheid code
  total.value += subtotal;
};

// TODO: oplossing werkt goed, maar probeer eens via programmacode je
// boodschappenlijst terug naar de beginstand te zetten
const empty = () => {
  location.reload();
};

// TODO: als je een input ivp td element gebruikt voor je aantallen, dan volstaat een
// v-model zodat de minus en plus functies overbodig worden. Wil je toch via de td
// blijven werken, overweeg dan om de plus en minus samen te voegen tot 1 generieke
// fuctie met extra parameter die aangeeft of er verlaagd of verhoogd moet worden
const minus = (product) => {
  console.log("test", product.Aantal, "lol", product.Prijs);
  if (product.Aantal > 0) {
    product.Aantal--;
    total.value -= product.Prijs;
  }
};
const plus = (product) => {
  product.Aantal++;
  total.value += product.Prijs;
  console.log("test", Aantal);
};
</script>

<template>
  <a style="font-size: 30px; color: #c00">Boodschappenlijst</a><br />
  <a style="color: #000"
    >Plus and minus can be used per product to adapt quantity</a
  >
  <table style="border: 3px solid #c00; color: #000" id="table">
    <tr>
      <th style="border: 2px solid #c00">Product</th>
      <th style="border: 2px solid #c00">Prijs</th>
      <th style="border: 2px solid #c00">Aantal</th>
      <td style="border: 2px solid #c00" colspan="2">+ -</td>
      <th style="border: 2px solid #c00">Subtotaal</th>
    </tr>
    <tr v-for="product in products">
      <td style="border: 2px solid">{{ product.Name }}</td>
      <td style="border: 2px solid">{{ product.Prijs.toFixed(2) }}</td>
      <td style="border: 2px solid">{{ product.Aantal }}</td>
      <td @click="plus(product)">+</td>
      <td @click="minus(product)">-</td>
      <td style="border: 2px solid">
        {{ (product.Prijs * product.Aantal).toFixed(2) }}
      </td>
    </tr>
    <tr>
      <td><input v-model="Name" id="Name" /></td>
      <td><input v-model="Prijs" type="number" step="0.01" id="Prijs" /></td>
      <td><input v-model="Aantal" type="number" step="1" id="Aantal" /></td>
    </tr>
    <tr>
      <th
        style="border: 2px solid #000; background-color: #c00"
        @click="addProduct"
      >
        Add product
      </th>
      <th
        style="border: 2px solid #c00; background-color: #000; color: #c00"
        @click="empty"
      >
        Delete list
      </th>
      <th style="border: 2px solid #c00">Totaal</th>
      <td colspan="2"></td>
      <td style="border: 2px solid">{{ total.toFixed(2) }}</td>
    </tr>
  </table>
</template>
