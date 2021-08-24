const getters = {
    getTitle(state) {
        console.log(state);
        return state.title;
    },
    getName(state) {
        return state.form.name;
    }
};

export default getters;