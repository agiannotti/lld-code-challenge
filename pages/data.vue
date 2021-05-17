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
    <form class="form-control">
      <label for="select"></label>
      <select
        v-model="selected"
        @change="onChange($event)"
        class="flex p-1 justify-center m-auto border-2 w-2/3 text-black"
        name="select"
        value=""
        label="{}"
      >
        <option disabled selected>Search Products...</option>
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
      <div class="flex-col flex sm:flex-row sm:flex-wrap justify-center">
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
    return { selected: '' };
  },

  mounted() {
    this.$store.dispatch('getData');
  },
  methods: {
    onChange(event) {
      this.selected === event.target.value;
      console.log(this.selected);
    },
  },
};
</script>
