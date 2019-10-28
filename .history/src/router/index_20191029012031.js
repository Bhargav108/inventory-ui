import Vue from "vue";
import VueRouter from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import Login from "../views/Login.vue";
import NotFound from "../views/NotFound";
import { settings } from "cluster";

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
    path: "/settings",
    name: "settings",
    component: settings
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
  routes
});

export default router;
