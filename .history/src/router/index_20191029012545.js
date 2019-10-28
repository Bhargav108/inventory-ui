import Vue from "vue";
import VueRouter from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import Login from "../views/Login.vue";
import NotFound from "../views/NotFound";
import Settings from "../views/Settings.vue";
import Orders from "../views/Orders.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    alias: "/dashboard",
    name: "dashboard",
    component: Dashboard
  },
  {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: "*",
    name: "not-found",
    component: NotFound
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: {
    ...routes,
    {
    path: '/',
    component: Dashboard,
    children: [{
      path: "/settings",
      name: "settings",
      component: Settings
    },
    {
      path: "/orders",
      name: "orders",
      component: Orders
    },]
  },
  }
});

export default router;
