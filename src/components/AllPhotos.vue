<template>
  <div>
    <img
      v-for="(photo, index) in photos[0]"
      :key="index"
      :src="'data:image/png;base64,' + photo"
      @click="changevue(photo)"
    />
  </div>
</template>

<script>
console.log("helloooooo");
export default {
  name: "AllPhotos",
  props: { photos: Array, changevue: Function, selectedphoto: String }
};
</script>

<style scoped>
img {
  width: 100px;
  height: 100px;
  padding: 3px;
  border-radius: 50%;
}
img:hover {
  transform: scale(1.1, 1.1);
  cursor: zoom-in;
}
</style>
