const API_URL = 'https://trayvonnorthern.com/Edgewood-API/public/api/products';
//state
export const state = () => ({
  products: [],
  categories: [],
});

//getters
export const getters = {
  getProducts(state) {
    return state.products;
  },
};
// actions
// Use for async!
export const actions = {
  async getData(state) {
    const res = await this.$axios.$post(API_URL);
    const product = res.data;
    console.log('hello!', product);
    state.commit('setProducts', product);
  },
  // async getData({ commit }) {
  //   // hit api with some axios

  //   const res = await this.$axios.$post(API_URL, { headers });
  //   const products = res.data;
  //   // commit mutation
  //   commit('setProducts', products);
  // },
};

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
  setProducts(state, payload) {
    state.product = payload;
  },
  addCategories(state, products) {
    for (let i = 0; i < products.length; i++) {
      let product_obj = {};
      product_obj.id = i + 1;
      product_obj.category = products[i].category;
      product_obj.catname = products[i].catname;
      state.categories.push(product_obj);
    }
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
  findByCat(state, e) {
    state.products = state.products.filter((product) => {
      return product.catname === e;
    });
  },
};

// addCategories(state, products) {
//   products.forEach((product) => {
//     if (!state.uniqueCategories.includes(product.category)) {
//       state.categories.push(product.category);
//     }
//   });
// },
