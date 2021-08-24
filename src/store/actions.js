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
    dummyAction() {
        console.log('dummy actions called');
    },
};

export default actions;