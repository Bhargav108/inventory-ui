import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import NotFound from "../views/NotFound";

import { storage } from "../utils";

import Home from "../views/Home.vue";
import Dashboard from "../views/Dashboard.vue";
import Inventory from "../views/Inventory.vue";
import Settings from "../views/Settings.vue";
import Orders from "../views/Orders.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "login",
    component: Login,
    meta: {
      public: true
    }
  },
  {
    path: "/register",
    name: "register",
    component: Register,
    meta: {
      public: true,
      register: true
    }
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
  routes: [
    ...routes,
    {
      path: "/",
      component: Home,
      children: [
        {
          path: "/dashboard",
          name: "dashboard",
          component: Dashboard
        },
        {
          path: "/inventory",
          name: "inventory",
          alias: "/",
          component: Inventory
        },
        {
          path: "/settings",
          name: "settings",
          component: Settings
        },
        {
          path: "/orders",
          name: "orders",
          component: Orders
        }
      ]
    }
  ]
});

router.beforeEach((to, from, next) => {
  const authInfo = storage.get("auth");
  if (to.meta.public) return next();
  if (!authInfo || !authInfo.email || !authInfo.token) return next("/login");
  return next();
});

export default router;
