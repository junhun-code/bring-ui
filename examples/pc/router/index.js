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
        component: r =>
          require.ensure([], () => r(require(`../../docs/${page.name}.md`))),
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
  base: process.env.BASE_URL,
  routes: availableRoutes
});
