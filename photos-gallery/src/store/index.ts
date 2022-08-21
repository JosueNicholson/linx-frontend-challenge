import { createStore } from "vuex";
import auth from "./auth";
import album from "./album";
import image from "./image";

const store = createStore({
  modules: {
    auth,
    album,
    image,
  },
});

export default store;
