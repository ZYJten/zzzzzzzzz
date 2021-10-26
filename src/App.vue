<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      id: "zhanann",
    };
  },
  components: {},
  computeds: {
    id() {
      return this.$route.params.id;
    },
  },
};
</script>

<style>
body{
  margin: 0px;
}
</style>
