<template>
  <div class="counter">
    <h4>{{ id }}</h4>
    <div class="count">
      {{ globalCounter }}
    </div>
    <div class="buttons">
      <button @click="increment">+</button>
      <button @click="decrement" v-bind:disabled="globalCounter < 1">-</button>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: 'GlobalCounter',
  props: {
    id: String
  },
  computed: {
    // globalCounter: this.$store.state.globalCounter,
    ...mapState(['globalCounter'])
  },
  methods: {
    // this.incrementGlobalCounter()
    // ...mapActions(['incrementGlobalCounter', 'decrementGlobalCounter'])

    // this.increment
    ...mapActions({
      increment: 'incrementGlobalCounter'
    }),
    // this.decrement
    ...mapActions({
      decrement: 'decrementGlobalCounter'
    }),
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
