import Vue from "vue";
import Router from "vue-router";
import NavConfig from "@/nav.config.json";
Vue.use(Router);

let routes = [];
function loadRoute(config) {
  config.map(nav =>
    nav.list.map(page =>
      routes.push({
        name: page.name,
        path: page.path,
        component: resolve => require([`../views/${page.name}.vue`], resolve),
        meta: {
          title: page.title || page.name,
          description: page.description
        }
      })
    )
  );
}

loadRoute(NavConfig);
let availableRoutes = routes.filter(item => item.path);

export default new Router({
  mode: "history",
  base: "/mobile",
  routes: availableRoutes
});
