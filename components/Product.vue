<template>
  <a class="relative w-52 block flex m-1">
    <!-- <span class="relative bg-black opacity-70 z-10"
      ><img class="max-h-48 min-w-48 z-0" :src="product.image" alt="" /><span
        class="relative b-0 z-20 text-white text-sm"
        >{{ product.name }}${{ product.price }}</span
      ></span
    > -->
    <img class="w-52 h-52" :src="product.image" alt="" />
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
  </a>
</template>

<script>
export default {
  name: 'Product',
  props: ['product'],
};
</script>
