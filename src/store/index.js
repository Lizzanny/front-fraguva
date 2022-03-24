import { createStore } from "vuex";

export default createStore({
  state: {
    usuario: {
      isAuthenticated: false,
      username: "",
      user_id: "",
    },
  },
  mutations: {
    setAuthenticated(state, value) {
      state.usuario.isAuthenticated = value;
    },
    setUserData(state, id, username) {
      state.usuario = username;
      state.user_id = id;
    },
  },
  actions: {},
});
