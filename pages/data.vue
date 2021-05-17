<template>
  <div>
    <h1
      class="
        flex
        text-2xl text-red-800
        justify-center
        m-auto
        font-semibold
        pb-4
      "
    >
      Products
    </h1>
    <form class="">
      <label for="select"></label>
      <select
        class="flex p-1 justify-center m-auto border-2 w-2/3 text-gray-400"
        name="select"
        value="filter"
        label="{}"
      >
        <option disabled selected>Search Products...</option>
        <option>Show All</option>
        <option
          class="text-black"
          v-for="category in $store.state.categories"
          :key="category.id"
          :value="category.catname"
        >
          {{ category.catname }}
        </option>
      </select>
    </form>
    <div class="container justify-center m-auto">
      <div class="flex flex-wrap justify-center">
        <Product
          v-for="product in $store.state.products"
          :key="product.id"
          :product="product"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Product from '../components/Product';
import Categories from '../components/Categories';
export default {
  components: {
    Product,
    Categories,
  },

  data() {
    return { products: {} };
  },

  async fetch({ $axios, store }) {
    const API_URL =
      'https://trayvonnorthern.com/Edgewood-API/public/api/products';
    const res = await $axios.$get(API_URL);
    const products = res.data;

    // store.commit('uniqueCats', products);
    // store.commit('uniqueCategories', products);
    store.commit('addCategories', products);
    store.commit('addProducts', products);
    store.commit('removeDuplicates', products);
  },
};
</script>
