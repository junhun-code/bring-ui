import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import demoBlock from "./components/demo-block-mobile.vue";
import install from "../../packages/";
import "highlight.js/styles/github.css";
import "github-markdown-css";

// 注册组件库
Vue.component("demo-block-mobile", demoBlock);
Vue.use(install);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
