<template>
  <div id="navbar">
    <p
      @click="changevue"
    >The Greatest App, from the extremely talented brain of Mr. Steppico and the smaller but somehow useful brain of Mr. Scott</p>
    <upload v-bind:saveobject="saveobject" />
  </div>
</template>

<script>
import Upload from "./Upload";
import { mapState } from "vuex";

export default {
  name: "Navbar",
  components: {
    upload: Upload
  },
  props: { changevue: Function, saveobject: Function }
};
</script>

<style>
title {
  font-weight: bold;
  font-size: 36px;
  color: black;
}
</style>
