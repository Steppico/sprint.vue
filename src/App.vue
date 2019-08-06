<template>
  <div id="app">
    <img id="logo" alt="SnS logo" src="./SS-Logo.jpg" />
    <h1>{{ title }}</h1>
    <navbar v-bind:changevue="changeVue" v-bind:saveobject="saveobject" />
    <allphotos v-if="currentView==='AllPhotos'" />
    <singlephoto v-if="currentView==='SinglePhoto'" />
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import AllPhotos from "./components/AllPhotos";
import SinglePhoto from "./components/SinglePhoto";
import { listObjects, getSingleObject, saveObject } from "../utils/index";
import { mapState } from "vuex";

export default {
  name: "App",
  components: {
    navbar: Navbar,
    allphotos: AllPhotos,
    singlephoto: SinglePhoto,
    upload: true
  },
  data: () => ({
    title: "The Magnificent App from Stefcott",
    saveobject: saveObject
  }),
  computed: mapState(["currentView", "photos", "selectedPhoto"]),

  methods: {
    changeVue(photo) {
      if (typeof photo === "object") {
        this.currentView = "AllPhotos";
        return;
      }
      this.currentView =
        this.currentView === "AllPhotos" ? "SinglePhoto" : "AllPhotos";
      this.selectedPhoto = photo;
    }
  },

  created() {
    listObjects().then(data =>
      Promise.all(
        data.slice(0, 50).map(imgData => getSingleObject(imgData.Key))
      ).then(imgimg => this.photos.push(imgimg))
    );
  }
};
</script>

<style>
#app {
  text-align: center;
}
</style>
<style scoped>
#logo {
  width: 200px;
  height: auto;
}
</style>