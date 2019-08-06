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
import { mapState } from "vuex";

console.log("helloooooo");
export default {
  name: "AllPhotos",
  props: { changevue: Function },
  computed: mapState(["currentView", "photos", "selectedPhoto"])
};
</script>

<style scoped>
img {
  width: 100px;
  height: 100px;
  padding: 3px;
  border-radius: 50%;
  animation: bounce 2s;
}

img:hover {
  animation: rotate 1s;
  cursor: grab;
}

@keyframes rotate {
  0% {
    transform: rotate(5deg);
  }
  10% {
    transform: rotate(7.5deg);
  }
  20% {
    transform: rotate(10deg);
  }
  30% {
    transform: rotate(12.5deg);
  }
  40% {
    transform: rotate(15deg);
  }
  50% {
    transform: rotate(17.5deg);
  }
  60% {
    transform: rotate(20deg);
  }
  70% {
    transform: rotate(22.5deg);
  }
  80% {
    transform: rotate(25deg);
  }
  90% {
    transform: rotate(27.5deg);
  }
  100% {
    transform: rotate(30deg);
  }
}

@keyframes bounce {
  from,
  20%,
  53%,
  80%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0);
  }

  40%,
  43% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -30px, 0);
  }

  70% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -15px, 0);
  }

  90% {
    transform: translate3d(0, -4px, 0);
  }
}
</style>
