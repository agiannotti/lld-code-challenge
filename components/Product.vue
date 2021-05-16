<template>
  <div class="flex-custom relative max-w-52 block m-1">
    <img class="w-full h-52" :src="product.image" :alt="product.name" />
    <span
      class="
        absolute
        bg-black
        bottom-0
        w-full
        h-14
        opacity-70
        z-10
        text-white text-center
        leading-4
        flex
        items-center
        justify-center
        m-auto
      "
    >
      {{ product.name }}<br />
      ${{ product.price }}.00
    </span>
  </div>
</template>

<script>
export default {
  name: 'Product',
  props: ['product'],
};
</script>

<style>
.flex--me {
  flex: 0 1 20%;
}
</style>
