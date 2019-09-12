<template>
  <div id="app">
    <mainHeader></mainHeader>
    <div class="container">
      <nav-menu class="nav"></nav-menu>
      <div class="doc">
        <router-view class="markdown"></router-view>
      </div>
    </div>
    <mobile-frame :path-name="$route.path"></mobile-frame>
  </div>
</template>

<script>
import mainHeader from "./components/header.vue";
import navMenu from "./components/nav-menu.vue";
import MobileFrame from "./components/mobile-frame.vue";

export default {
  name: "app",
  data() {
    return {
      pathName: ""
    };
  },
  components: {
    mainHeader,
    navMenu,
    MobileFrame
  }
};
</script>

<style lang="less">
@import "./styles/index.less";
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  overflow: overlay;
}
.container {
  margin-top: 60px;
  padding: 20px;
  background-color: #fff;
  display: flex;
  .nav {
    width: 210px;
    flex-shrink: 0;
  }
  .doc {
    flex: 1;
  }
  .markdown {
    width: 1000px;
    padding: 32px 48px 48px;
    box-sizing: border-box;
  }
}

.container:after {
  content: "";
  clear: both;
  display: block;
}
</style>
