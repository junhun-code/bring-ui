<template>
  <div id="mobile">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "mobile-app",
  data() {
    return {};
  },
  components: {}
};
</script>

<style lang="less">
@import "./styles/index.less";
#mobile {
  width: 100%;
  height: 100%;
  max-width: 640px;
  max-height: 1032px;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  overflow: overlay;
}
</style>
