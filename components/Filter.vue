<template>
  <div class="flex">
    {{ product.categories }}
  </div>
</template>

<script>
export default {
  name: 'Filter',
  props: ['product'],
};
</script>
