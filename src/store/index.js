import { createStore } from "vuex";
import state from "./state";
import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";
import plugins from "./plugins";
import modules from "./modules";

export default createStore({
  strict: true, // strict only to watch if mutations to state are done in "mutations" object handlers
  
  state, // rootstate
  getters, // rootgetter
  mutations,
  actions,

  plugins,

  modules,
});

// "counter" module can be accessed from "rootstate.counter"

// const example_state = {
//   form: {
//     name: ''
//   },
//   globalCounter: 0,
//   title: 'Vuex demo'
// }

// this.$store.state.
