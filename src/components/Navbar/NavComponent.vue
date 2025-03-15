<script setup lang="ts">
import gsap from "gsap";
import { onMounted } from "vue";

onMounted(() => {
  // document.addEventListener("scroll", () => {
  //   if (window.scrollY > 150) {
  //     gsap.to("#navbar", { duration: 1, top: "20px" });
  //   }
  //   if (window.scrollY === 0) {
  //     gsap.to("#navbar", { duration: 1, top: "-100px" });
  //   }
  // });
});
</script>

<template>
  <nav id="navbar" :class="$style.container_navbar">
    <div :class="$style.nav_logo">
      <h1>AP</h1>
    </div>
    <ul :class="$style.nav_links">
      <li :class="$style.nav_link">Home</li>
      <li :class="$style.nav_link">Anime</li>
      <li :class="$style.nav_link">Manga</li>
      <li :class="$style.nav_link">About</li>
      <li :class="$style.nav_link">Contact</li>
    </ul>
  </nav>
</template>

<style module>
.container_navbar {
  top: 20px;
  left: 0;
  right: 0;
  display: flex;
  padding: 0 20px;
  position: fixed;
  align-items: center;
  border-radius: 10px;
  justify-content: space-between;
  background-color: #000000;
  z-index: 100;
  margin: auto;
  height: 60px;
  width: 97%;
}
.container_navbar::after {
  content: "";
  left: 0;
  width: 100px;
  height: 100%;
  position: absolute;
  border-radius: 10px 0 0 10px;
  background-color: #fff;
  clip-path: polygon(0 0, 100% 0%, 50% 100%, 0% 100%);
}
.nav_links {
  color: #fff;
  display: flex;
  column-gap: 30px;
  align-items: center;
}
.nav_logo {
  color: #000;
  z-index: 50;
}
</style>
