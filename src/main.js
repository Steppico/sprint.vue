import Vue from "vue";
import App from "./App.vue";
import Vuex from "vuex";
import { listObjects, getSingleObject } from "../utils/index";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    currentView: "AllPhotos",
    photos: [],
    selectedPhoto: null
  },
  mutations: {
    changeVue(state, photo) {
      console.log(state, photo);
      if (typeof photo === "undefined") {
        state.currentView = "AllPhotos";
        return;
      }
      state.currentView =
        state.currentView === "AllPhotos" ? "SinglePhoto" : "AllPhotos";
      state.selectedPhoto = photo;
    },
    addPhotosToArray(state, newPhotos) {
      state.photos = newPhotos;
    }
  },
  actions: {
    download: function download() {
      listObjects().then(data =>
        Promise.all(
          data.slice(0, 10).map(imgData => getSingleObject(imgData.Key))
        ).then(photos => store.commit("addPhotosToArray", photos))
      );
    }
  }
});

new Vue({
  store,
  components: { App },
  render: h => h(App)
}).$mount("#app");
