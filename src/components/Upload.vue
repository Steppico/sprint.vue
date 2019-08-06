<template>
  <div>
    <button v-on:click="maybeThisIsAnEvent">
      <input v-on:change="eventHandler" id="inn_put" type="file hidden" />Upload Here!
    </button>
  </div>
</template>

<script>
import { saveObject } from "../../utils/index";
export default {
  name: "Upload",
  props: {
    saveobject: Function
  },
  methods: {
    eventHandler(e) {
      saveObject(e.target.files[0]);
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
  display: none;
  left: 99999999px;
  background-color: yellow;
}
</style>
