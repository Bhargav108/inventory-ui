import inventoryData from '../helpers/data';

const initialState = {
  items: inventoryData
};

export default {
  state: initialState,
  mutations: {},
  actions: {},
  getters: {
    getAllProducts: state => state.items,
    itemById: state => id => state.items.filter(item => item._id === id)
  }
};
