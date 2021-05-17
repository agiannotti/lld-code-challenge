//state
export const state = () => ({
  products: [],
  uniqueCats: [],
  pagination: [],
  categories: [],
});

//getters
export const getters = {};

//actions
//Use for async!
// export const actions = {
//   async getProducts({ commit }) {
//     // hit api with some axios
//     const API_URL =
//       'https://trayvonnorthern.com/Edgewood-API/public/api/products';
//     const products = await this.$axios.$post(API_URL);
//     // commit mutation
//     commit('addProducts', products);
//     return { products };
//   },
// };

//mutations
// synchronous, will not wait
export const mutations = {
  uniqueCats(state, products) {
    const cats = [];
    for (let i = 0; i < products.length; i++) {
      cats.push(products[i].category);
      console.log(cats);
    }
    state.uniqueCats = [...new Set(cats)];
  },
  addProducts(state, products) {
    for (let i = 0; i < products.length; i++) {
      state.products.push(products[i]);
    }
  },
  // addCatNames(state, products) {
  //   for (let i = 0; i < products.length; i++) {
  //     state.catnames.push(products[i].catnames);
  //   }
  // },
  addCategories(state, products) {
    products.forEach((product) => {
      if (!state.uniqueCats.includes(product.category)) {
        state.categories.push(product.category);
      }
      console.log(state.categories);
    });
  },
};
