<template>
  <div>
    <h1>{{ title }}</h1>
    <div class="counters">
      <GlobalCounter id="Global Counter" />

      <Counter id="Counter #1" />
      <Counter id="Counter #2" />

      <CounterModule moduleId="counter" />
    </div>

    <Numbers />

    <Form />

    <FormWithVModel />

  </div>
</template>

<script>
import { mapState } from "vuex";
import Counter from "./components/Counter.vue";
import GlobalCounter from "./components/GlobalCounter.vue";
import Numbers from "./components/Numbers";
import Form from "./components/Form";
import FormWithVModel from "./components/FormWithVModel";
import CounterModule from "./components/CounterModule";

export default {
  name: "App",
  components: {
    Counter,
    GlobalCounter,
    Numbers,
    Form,
    FormWithVModel,
    CounterModule,
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
