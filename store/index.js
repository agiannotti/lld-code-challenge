const API_URL = 'https://trayvonnorthern.com/Edgewood-API/public/api/products';
export const state = () => ({
  products: [],
  categories: [],
  filteredProducts: [],
});

//getters
export const getters = {
  getProducts(state) {
    return state.products;
  },
  filterByCategory(state, e) {
    state.products = results.filter((product) => {
      return product.catname === e;
    });
  },
};

//actions
export const actions = {
  async getData(state) {
    const res = await this.$axios.$get(API_URL);
    const product = res.data;
    state.commit('setProducts', product);
    state.commit('setCategories', product);
    state.commit('removeDuplicates', product);
  },
};

//mutations
export const mutations = {
  setProducts(state, payload) {
    state.products = payload;
  },
  setCategories(state, products) {
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
};
