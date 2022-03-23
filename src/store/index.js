import { createStore } from "vuex";

export default createStore({
  state: {
    usuario: {
      user_id: "0",
      nombre: "",
      islogueado: true,
    },
  },
  mutations: {
    login(state) {
      state.usuario.islogueado = false;
    },
  },
  actions: {},
});
