<template>
  <div>
    <input type="file" v-on:change="eventHandler" />
  </div>
</template>

<script>
export default {
  name: "Upload",
  props: {
    saveobject: Function
  },
  methods: {
    eventHandler(e) {
      this.saveobject(e.target.files[0]);
    }
  }
};
</script>

<style>
input {
  color: black;
  background-color: yellow;
}
</style>
