const mutationsIds = {
    changeCount: 'changeCount',
};

const counter = {
    namespaced: true,
    state: () => ({
        title: 'counter module',
        count: 0,
    }),
    getters: {
        getTitle(state) {
            // I'd expect that this would return "counter module"
            return state.title;
        }
    },
    mutations: {
        [mutationsIds.changeCount]: (state, value = 1) => {
            state.count += value;
        }
    },
    actions: {
        increment(context) {
            // context is the store of current module
            context.commit(mutationsIds.changeCount, 1);

            // explicitly call rootActions
            // context.dispatch('incrementGlobalCounter', undefined, { root: true });
        },
        decrement(context) {
            context.commit(mutationsIds.changeCount, -1);
        }
    }
};

export default counter;