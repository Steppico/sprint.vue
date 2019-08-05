<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <h1>{{ title }}</h1>
    <navbar v-bind:changevue="changeVue" v-bind:saveobject="saveobject" />
    <allphotos
      v-if="currentView==='AllPhotos'"
      v-bind:photos="photos"
      v-bind:changevue="changeVue"
      v-bind:selectedphoto="selectedPhoto"
    />
    <singlephoto
      v-if="currentView==='SinglePhoto'"
      v-bind:changevue="changeVue"
      v-bind:selectedphoto="selectedPhoto"
    />
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import AllPhotos from "./components/AllPhotos";
import SinglePhoto from "./components/SinglePhoto";
import { listObjects, getSingleObject, saveObject } from "../utils/index";

export default {
  name: "App",
  components: {
    navbar: Navbar,
    allphotos: AllPhotos,
    singlephoto: SinglePhoto
  },
  data: () => ({
    title: "The Magnificent App from Stefcott",
    currentView: "AllPhotos",
    photos: [],
    selectedPhoto: undefined,
    saveobject: saveObject
  }),

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
