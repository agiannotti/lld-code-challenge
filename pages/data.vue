<template>
  <div class="container mx-auto mt-8">
    <DataCard v-for="product in products" :data="products" :key="products.id" />
  </div>
</template>

<script>
export default {
  async fetch() {
    this.products = await fetch(
      'https://trayvonnorthern.com/Edgewood-API/public/api/products'
    ).then((res) => console.log(res.json()));
  },
  data() {
    return {
      products: {},
    };
  },
};
</script>
