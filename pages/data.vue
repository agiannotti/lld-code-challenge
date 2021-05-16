<template>
  <div>
    <h1 class="flex justify-center m-auto">Products</h1>
    <form class="shadow-md rounded-sm px-8 pt-6 pb-8 mb-4">
      <label for="select"></label>
      <select
        class="flex justify-center m-auto rounded-2xl border-2 w-1/2"
        name="select"
        value="filter"
        label="{}"
      >
        <option>Search Products...</option>
        <option value="categories">Category</option>
        <option value="catNames">Category Name</option>
        <option>All</option>
      </select>
    </form>
    <div class="container justify-center m-auto">
      <div class="flex flex-wrap justify-center">
        <Product
          v-for="product in products"
          :key="product.id"
          :product="product"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Product from '../components/Product';
import Filter from '../components/Filter';
export default {
  components: {
    Product,
    Filter,
  },

  data() {
    return { products: [] };
  },
  async asyncData({ $axios }) {
    try {
      const API_URL =
        'https://trayvonnorthern.com/Edgewood-API/public/api/products';
      const res = await $axios.$get(API_URL);
      const products = res.data;
      return { products };
    } catch (error) {
      console.log(error);
    }
  },
};

export const state = (products) => ({
  products,
});
</script>
