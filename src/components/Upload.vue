<template>
  <div>
    <button v-on:click="maybeThisIsAnEvent">
      <input v-on:change="eventHandler" id="inn_put" type="file" />Upload Here!
    </button>
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
    },
    maybeThisIsAnEvent() {
      document.getElementById("inn_put").click();
    }
  }
};
</script>

<style>
input {
  color: black;
  position: absolute;
  left: 99999999px;
  background-color: yellow;
}
</style>
