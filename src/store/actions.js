import { mutationsIds } from "./mutations";

const actions = {
    incrementGlobalCounter({ commit }) {
        // commit('changeGlobalCounter', 1);
        commit(mutationsIds.changeGlobalCounter, 1);
    },
    decrementGlobalCounter({ commit }) {
        // commit('changeGlobalCounter', -1);
        commit(mutationsIds.changeGlobalCounter, -1);
    },
};

export default actions;