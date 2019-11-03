import Vue from "vue";
import Vuex from "vuex";

import auth from "./modules/account";
import inventory from "./modules/inventory";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    auth: {
      namespaced: true,
      ...auth
    },
    inventory: {
      namespaced: true,
      ...inventory
    }
  }
});
