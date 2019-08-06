<template>
  <div id="navbar">
    <p
      @click="$store.commit('changeVue')"
    >The Greatest App, from the extremely talented brain of Mr. Steppico and the smaller but somehow useful brain of Mr. Scott</p>
    <upload />
  </div>
</template>

<script>
import Upload from "./Upload";

export default {
  name: "Navbar",
  components: {
    upload: Upload
  }
};
</script>

<style>
title {
  font-weight: bold;
  font-size: 36px;
  color: black;
}
</style>
