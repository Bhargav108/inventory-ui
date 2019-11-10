import Vue from "vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "element-ui/lib/theme-chalk/display.css";
import locale from "element-ui/lib/locale/lang/en";
import "@/styles/global.scss";

import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = true;

Vue.use(ElementUI, { locale });

new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App)
});
