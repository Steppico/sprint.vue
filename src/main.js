import Vue from "vue";
import App from "./App.vue";
import Vuex from "vuex";
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    currentView: "AllPhotos",
    photos: [],
    selectedPhoto: undefined
  },
  mutations: {
    changeVue(photo) {
      if (typeof photo === "object") {
        this.currentView = "AllPhotos";
        return;
      }
      this.currentView =
        this.currentView === "AllPhotos" ? "SinglePhoto" : "AllPhotos";
      this.selectedPhoto = photo;
    }
  }
});

new Vue({
  render: h => h(App),
  store
}).$mount("#app");
