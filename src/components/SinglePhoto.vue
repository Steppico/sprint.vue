<template>
  <img
    :src="'data:image/png;base64,' + $store.state.selectedPhoto"
    @click="$store.commit('changeVue')"
  />
</template>

<script>
export default {
  name: "SinglePhoto"
};
</script>

<style scoped>
img {
  border-radius: 0%;
  width: auto;
  height: auto;
}
</style>
