<script setup>
  import { computed, ref } from 'vue';  
  const props = defineProps(['products'])
  const total = computed(() => props.products.reduce((acc, item) => acc += item.quantity * item.price, 0))
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
  </table>
</template>

<style>
    .red {
        border: 2px solid #c00
    }
    .black {
        border: 2px solid
    }
</style>