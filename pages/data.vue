<template>
  <div class="container mx-auto mt-8">
    <!-- <DataCard v-for="(product, index) in products" :key="index" /> -->
    <ul>
      <div v-for="(product, index) in products" :key="index" :product="product">
        <div v-for="data in product" :key="data.index">
          <div class="md:flex">
            <a class="md:flex-shrink-0">
              <img :src="data.image" :alt="data.name" />
            </a>
          </div>
          <p class="mt-2 text-gray-600">{{ data.name }}</p>
          <p class="mt-2 text-gray-600">{{ data.description }}</p>
          <p class="mt-2 text-gray-600">{{ data.price }}</p>
        </div>
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
    return { products };
  },
  data() {
    return { products: {} };
  },
};
</script>

<style lang="postcss">
img {
  height: 120px;
}
</style>
