<template>
  <div class="container m-auto p-8 text-grey-darkest">
    <h1>Products</h1>

    <form class="shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <label for="select"></label>
      <p>Filter by</p>
      <select
        name="select"
        value="filter"
        label="{}"
        placeholder="Search Products..."
      >
        <option></option>

        <option value="categories">Category</option>

        <option value="cats">Category Name</option>
      </select>
    </form>

    <div
      class="grid grid-cols-4 gap-40"
      v-for="(product, index) in products"
      :key="index"
      :product="product"
    >
      <div class="h-48 w-48" v-for="data in product" :key="data.id">
        <img class="z-0 w-full max-h-32" :src="data.image" :alt="data.name" />
        <span class="block bg-black opacity-70 z-10">
          <span class="relative z-20 text-white text-sm">{{ data.name }}</span>
          <span class="relative z-20 text-white text-sm">{{ data.price }}</span>
        </span>
      </div>
    </div>
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
