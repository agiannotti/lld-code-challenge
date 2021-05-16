//state
export const state = () => {
  products: [];
};

//getters
export const getters = {};

//actions
//Use for async!
export const actions = {
  async getProducts({ $axios }) {
    // hit api with some axios
    const API_URL =
      'https://trayvonnorthern.com/Edgewood-API/public/api/products';
    const products = await $axios.$post(API_URL);
    // commit mutation
    commit('addProducts', products);
    return { products };
  },
};

//mutations
// synchronous, will not wait
export const mutations = {
  addProducts(state, products) {
    state.products.push({ ...products });
  },
};
