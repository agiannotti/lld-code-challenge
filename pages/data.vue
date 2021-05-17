<template>
  <div>
    <h1
      class="
        flex
        text-2xl text-red-700
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
        @change="handleSelect($event.target.value)"
        class="flex p-1 justify-center m-auto border-2 w-2/3 text-black"
        name="select"
        value=""
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
export default {
  components: {
    Product,
  },

  data() {
    return { products: [] };
  },

  // async fetch({ $axios, store }) {
  //   const API_URL =
  //     'https://trayvonnorthern.com/Edgewood-API/public/api/products';
  //   const res = await $axios.$get(API_URL);
  //   const products = res.data;

  // store.commit('uniqueCats', products);
  // store.commit('uniqueCategories', products);
  mounted() {
    // store.commit('getData')
    this.$store.dispatch('getData');
  },
  // store.commit('addProducts', products);
  // store.commit('removeDuplicates', products);
  // },,
  methods: {
    handleSelect(e) {
      this.$store.commit('findByCat', e);
      // return this.$store.getters.findByCat(e);
    },
  },
};
</script>
