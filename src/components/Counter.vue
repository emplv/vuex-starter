<template>
  <div class="counter">
    <h4>{{ id }}</h4>
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
export default {
  name: 'Counter',
  props: {
    id: String
  },
  data() {
    return {
      count: 0,
    }
  },
  methods: {
    increment() {
      this.count += 1;
    },
    decrement() {
      this.count -= 1;
    }
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
