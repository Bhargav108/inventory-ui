export default {
  state: {
    items: null
  },
  mutations: {},
  actions: {},
  getters: {
    allItems: state => state.items,
    itemById: state => id => state.items.filter(item => item._id === id)
  }
};
