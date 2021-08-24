export const mutationsIds = {
    // descriptive key about actions, IMPORTANT that value matches mutation handler id below
    // change_global___CounTer: 'changeGlobalCounter',
    changeGlobalCounter: 'changeGlobalCounter',
    // changeCounter: 'changeGlobalCounter',
    updateFormName: 'updateFormName',
};

const mutations = {
    // "changeGlobalCounter" is mutation id
    changeGlobalCounter(state, amount = 1) {
        state.globalCounter += amount;
    },

    updateFormName(state, value) {
        state.form.name = value;
    }
};

export default mutations;
