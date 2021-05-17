//state
export const state = () => ({
  products: [],
  pagination: [],
  uniqueCategories: [],
  categories: [],
});

//getters
export const getters = {};

// actions
// Use for async!
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

// mutations
// synchronous, will not wait
export const mutations = {
  // uniqueCategories(state, products) {
  //   const cats = [];
  //   for (let i = 0; i < products.length; i++) {
  //     cats.push(products[i].category);
  //   }
  //   state.uniqueCategories = [...new Set(cats)];
  //   const catFilter = products.filter((item) => {
  //     // !state.uniqueCategories.includes(item.category);
  //     console.log('item', item);
  //   });
  //   console.log(products);
  //   console.log(state.uniqueCategories);
  // },
  addProducts(state, products) {
    for (let i = 0; i < products.length; i++) {
      state.products.push(products[i]);
    }
  },
  addCategories(state, products) {
    for (let i = 0; i < products.length; i++) {
      let product_obj = {};
      product_obj.id = i + 1;
      product_obj.category = products[i].category;
      product_obj.catname = products[i].catname;
      state.categories.push(product_obj);
    }
    console.log(state.categories);
  },
  removeDuplicates(state) {
    let setObj = new Set();
    let result = state.categories.reduce((acc, item) => {
      if (!setObj.has(item.category)) {
        setObj.add(item.category, item);
        acc.push(item);
      }
      return acc;
    }, []);
    state.categories = result;
  },
};

// addCategories(state, products) {
//   products.forEach((product) => {
//     if (!state.uniqueCategories.includes(product.category)) {
//       state.categories.push(product.category);
//     }
//   });
// },
