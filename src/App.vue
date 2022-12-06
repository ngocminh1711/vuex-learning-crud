<template>
  <div id="app">
    <Navbar />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";

export default {
  name: "App",
  data() {
    return {
      post: [],
    };
  },
  components: {
    Navbar,
  },
  mounted() {},
};
</script>

<style scoped>
#app {
  margin-top: 0px;
}
</style>
