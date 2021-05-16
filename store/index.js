//state
export const state = () => {
  products: [];
};

//getters
export const getters = {};
//actions
//User for async!!
export const actions = {
  async getProducts({ $axios }) {
    const API_URL =
      'https://trayvonnorthern.com/Edgewood-API/public/api/products';
    const res = await $axios.$get(API_URL);
  },
};

//mutations
// synchronous, will not wait
export const mutations = {};
