<template>
  <div id="app">
    <img id="logo" alt="SnS logo" src="./SS-Logo.jpg" />
    <h1>{{ title }}</h1>
    <navbar />
    <allphotos v-if="$store.state.currentView==='AllPhotos'" />
    <singlephoto v-if="$store.state.currentView==='SinglePhoto'" />
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import AllPhotos from "./components/AllPhotos";
import SinglePhoto from "./components/SinglePhoto";

export default {
  name: "App",
  components: {
    navbar: Navbar,
    allphotos: AllPhotos,
    singlephoto: SinglePhoto,
    upload: true
  },
  data: () => ({
    title: "The Magnificent App from Stefcott"
  }),

  created() {
    this.$store.dispatch("download");
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