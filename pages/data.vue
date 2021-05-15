<template>
  <div class="container mx-auto mt-8">
    <!-- <DataCard v-for="(product, index) in products" :key="index" /> -->
    <ul>
      <div v-for="(product, index) in products" :key="index" :product="product">
        <li v-for="data in product" :key="data.index">
          <br />{{ data.name }} {{ data.price }}{{ data.description }}
          <img :src="data.image" :alt="data.name" />
        </li>
      </div>
    </ul>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const API_URL =
      'https://trayvonnorthern.com/Edgewood-API/public/api/products';
    const products = await $axios.$get(API_URL);
    console.log(products.data[0].id);
    return { products };
  },
  data() {},
};
</script>
