<template>
  <div
    class="
      flex-1
      container
      m-auto
      text-grey-darkest
      items-center
      justify-center
    "
  >
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

    <div
      class="grid grid-cols-4 grid-flow-row gap-2"
      v-for="(product, index) in products"
      :key="index"
      :product="product"
    >
      <div class="h-150 w-120" v-for="data in product" :key="data.id">
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

export const state = (products) => ({
  products,
});
</script>
