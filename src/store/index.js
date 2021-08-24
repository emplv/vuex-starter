import { createStore } from "vuex";

export default createStore({
  state: {
    title: 'Vuex Demo',
    globalCounter: 0,
  },
  getters: {
    getTitle(state) {
      console.log(state);
      return state.title;
    },
  },
  mutations: {
    changeGlobalCounter(state, amount = 1) {
      state.globalCounter += amount;
    },
  },
  actions: {
    incrementGlobalCounter({ commit }) {
      commit('changeGlobalCounter', 1);
    },
    decrementGlobalCounter({ commit }) {
      commit('changeGlobalCounter', -1);
    },
  },
});
