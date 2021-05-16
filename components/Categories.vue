<template>
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
    </select>
  </form>
</template>

<script>
export default {
  name: 'Categories',
  props: ['product'],
};
</script>
