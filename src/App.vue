<template>
  <div>
    <h1>{{ title }}</h1>
    <div class="counters">
      <Counter id="Counter #1" />
      <Counter id="Counter #2" />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Counter from "./components/Counter.vue";

export default {
  name: "App",
  components: {
    Counter,
  },
  computed: {
    ...mapState(['title'])
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.counters {
  display: flex;
}
</style>
