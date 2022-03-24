import Vue from "vue";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import VueAxios from "vue-axios";
import store from "./store";
import Vuex from "vuex";
import VueSweetalert2 from "vue-sweetalert2";

import "bootstrap/dist/css/bootstrap.css";
import "sweetalert2/dist/sweetalert2.min.css";

axios.defaults.baseURL = "http://localhost:5001";
createApp(App)
  .use(VueAxios, axios)
  .use(router)
  .use(store)
  .use(Vuex)
  .use(VueSweetalert2)
  .mount("#app");

import "bootstrap/dist/js/bootstrap.js";
