<template>
  <div class="md:flex">
    <div class="md:flex-shrink-0">
      <img class="md:w-56" :src="data.image" :alt="data.name" />
    </div>
    <div>
      <div class="text-sm font-bold">
        {{ data.descriptione }}
      </div>
      <p class="mt-2 text-gray-600">{{ data.price }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: () => {},
    },
  },
};
</script>
