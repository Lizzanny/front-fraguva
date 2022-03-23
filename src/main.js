import Vue from "vue";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import VueAxios from "vue-axios";
import store from "./store";
import Vuex from "vuex";

import "bootstrap/dist/css/bootstrap.css";

axios.defaults.baseURL = "http://localhost:5001";
createApp(App)
  .use(VueAxios, axios)
  .use(router)
  .use(store)
  .use(Vuex)
  .mount("#app");

import "bootstrap/dist/js/bootstrap.js";
