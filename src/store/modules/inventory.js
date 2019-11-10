import inventoryAPI from "@/api/inventory";
const initialState = {
  items: []
};

export default {
  state: initialState,
  mutations: {
    SET_PRODUCT_ITEMS(state, payload) {
      state.items = payload;
    }
  },
  actions: {
    fetchInventory({ commit }) {
      return inventoryAPI.fetchInventory().then(({ data: products }) => {
        commit("SET_PRODUCT_ITEMS", products);
      });
    }
  },
  getters: {
    getAllProducts: state => state.items,
    itemById: state => id => state.items.filter(item => item._id === id)
  }
};
