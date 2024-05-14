import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import echarts from "./plugins/charts";
Vue.prototype.$echarts = echarts;
import ChartView from "@/components/chart/index.vue";
Vue.component(ChartView.name, ChartView); //注册全局组件

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
