<script setup lang="ts">
// GSAP
import gsap from "gsap";

// VUE
import { onMounted } from "vue";

onMounted(() => {
  gsap.fromTo(
    "#loading_animation",
    {
      width: "100vw",
      height: "100vw",
      duration: 2,
    },
    {
      width: "200px",
      height: "200px",
      duration: 2,
    }
  );
  gsap.to("#loading_text > span", {
    duration: 2,
    transform: "translateX(0px)",
  });
});
</script>

<template>
  <div id="loading_animation" :class="$style.loading_animation">
    <div id="loading_text" :class="$style.loading_text">
      <h1>A</h1>
      <span>nime</span>
    </div>
  </div>
</template>

<style module>
.loading_animation {
  width: 100vw;
  height: 100vw;
  margin: auto;
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  background-color: #000000;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0.9;
  z-index: 100;
  overflow: hidden;
}
.loading_text {
  width: 300px;
  display: flex;
  overflow: hidden;
  position: relative;
  align-items: center;
  justify-content: center;
}
.loading_text > h1 {
  color: #ffffffff;
  font-size: 2rem;
  font-weight: 900;
}
.loading_text > span {
  color: #ffffffff;
  font-size: 2rem;
  font-weight: 100;
  transform: translateX(-300px);
}
</style>
