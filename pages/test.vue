<template>
  <div class="container text-grey-darkest">
    <h1>Products:</h1>

    <form class="shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <label for="select"></label>
      <span>Filter by</span>
      <select
        class="rounded-2xl border-2"
        name="select"
        value="filter"
        label="{}"
        placeholder="Search Products..."
      >
        <option></option>
        <option value="categories">Category</option>
        <option value="catNames">Category Name</option>
      </select>
    </form>

    <Product
      v-for="(product, index )in products"
      :key="index"
      :id="index"
      :product="product.product"
    />
  </div>
</template>

<script>
import Product from '../components/Product';
export default {
  components: {
    Product,
  },

  data() {
    return { products: [] };
  },
  async asyncData({ $axios }) {
    const API_URL =
      'https://trayvonnorthern.com/Edgewood-API/public/api/products';
    try {
      const products = await $axios.$get(API_URL);
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
