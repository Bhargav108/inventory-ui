import inventoryData from "../helpers/data";
import inventoryAPI from "@/api/inventory";
const initialState = {
  items: inventoryData
};

export default {
  state: initialState,
  mutations: {
    SET_PRODUCT_ITEMS(oldState, payload) {
      this.state.items = payload;
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
