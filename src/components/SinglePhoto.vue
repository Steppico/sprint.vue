<template>
  <img :src="'data:image/png;base64,' + selectedphoto" @click="changevue" />
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "SinglePhoto",

  props: {
    changevue: Function,
    selectedphoto: String
  },
  computed: mapState(["currentView", "photos", "selectedPhoto"])
};
</script>

<style scoped>
img {
  border-radius: 0%;
  width: 100%;
  height: auto;
}
</style>
