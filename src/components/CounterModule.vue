<template>
  <div class="counter">
    <h4>{{ moduleId || title }}</h4>
    <div class="count">
      {{ count }}
    </div>
    <div class="buttons">
      <button @click="increment">+</button>
      <button @click="decrement" v-bind:disabled="count < 1">-</button>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import { mapState, mapActions } from "vuex";
import counter from "@/store/modules/counter";

export default {
  name: 'CounterModule',
  props: {
    // need to use this "moduleId" as module name everywere
    moduleId: String,
  },
  beforeCreate() {
    if (!this.$store.hasModule(this.moduleId)) {
      this.$store.registerModule(this.moduleId, counter);
    }
  },
  computed: {
    // 1st options
    // count: this.$store.state.counter.count,

    // 2nd option
    // ...mapState({
    //   count: (state) => state.counter.count
    // }),

    // 3rd options
    // ...mapState('counter', ['count', 'title']),

    // using local functions, in order to acces "this" context
    count() {
      return this.$store.state[this.moduleId].count;
    },
    title() {
      return this.$store.state[this.moduleId].title;
    }
  },
  methods: {
    // ...mapActions(this.moduleId, ['increment', 'decrement']),
    increment() {
      this.$store.dispatch(`${this.moduleId}/increment`);
    },
    decrement() {
      this.$store.dispatch(`${this.moduleId}/decrement`);
    },
  }
}
</script>

<style scoped>
.counter {
  display: flex;
  width: 300px;
  margin: 10px;
  padding: 20px;
  background: #f9f9f9;
  border: 1px solid #2e2e2e;
  justifi-content: center;
  align-items: center;
  flex-direction: column;
}

.count {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50px;
  margin-bottom: 10px;
  background: #2e2e2e;
  color: #fff;
}

.buttons {
  display: flex;
  justify-content: space-evenly;
}

button {
  width: 50px;
  height: 30px;
  text-align: center;
}

button + button {
  margin-left: 10px;
}
</style>
