import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import install from "../../packages/";

// 注册组件库
Vue.use(install);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#mobile");
