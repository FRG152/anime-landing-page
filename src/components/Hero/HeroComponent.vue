<script setup lang="ts">
// GSAP
import gsap from "gsap";

// VUE
import { onMounted } from "vue";

onMounted(() => {
  gsap.fromTo(
    "#box_line_top",
    {
      duration: 2,
      width: "0%",
    },
    {
      duration: 2,
      width: "95%",
    }
  );
});
</script>

<template>
  <section :class="$style.container_hero">
    <div id="box_line_top" :class="$style.box_line_top">
      <h3 :class="$style.logo">AP</h3>
      <div :class="$style.line_top" />
    </div>
    <div id="box_line_bottom" :class="$style.box_line_bottom">
      <div :class="$style.line_bottom" />
      <div :class="$style.social_media">
        <div
          class="pi pi-twitter"
          style="color: #fff; cursor: pointer; font-size: 1.5rem"
        />
        <div
          class="pi pi-facebook"
          style="color: #fff; cursor: pointer; font-size: 1.5rem"
        />
        <div
          class="pi pi-instagram"
          style="color: #fff; cursor: pointer; font-size: 1.5rem"
        />
      </div>
    </div>
    <h1 :class="$style.hero_title">ANIME PORTAL</h1>
    <p :class="$style.hero_desc">
      Discover, Explore, and Immerse <br />
      Yourself in the World of Anime
    </p>
    <button :class="$style.hero_button">More</button>
  </section>
</template>

<style module>
.container_hero {
  display: flex;
  position: relative;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-size: cover;
  background-image: url("/public/image/hero_bg.jpg");
  background-repeat: no-repeat;
  background-attachment: fixed;
}
.container_hero::before {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 200px;
  z-index: 0;
  background-color: #000000;
  content: "";
}
.container_hero::after {
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  bottom: 0;
  height: 200px;
  z-index: 0;
  background-color: #000000;
  content: "";
}
.box_line_top {
  top: 75px;
  left: 0;
  right: 0;
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  column-gap: 20px;
  z-index: 100;
  margin: auto;
  width: 95%;
}
.line_top {
  width: 100%;
  height: 1px;
  background-color: #ffffff;
}
.logo {
  color: #ffff;
  font-size: 2rem;
}
.box_line_bottom {
  left: 0;
  right: 0;
  bottom: 75px;
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  column-gap: 20px;
  z-index: 100;
  margin: auto;
  width: 95%;
}
.line_bottom {
  width: 100%;
  height: 1px;
  background-color: #ffffff;
}
.social_media {
  display: flex;
  column-gap: 15px;
}
.hero_title {
  color: #ffff;
  z-index: 10;
  font-size: 8rem;
  font-weight: 600;
}
.hero_desc {
  color: #ffff;
  z-index: 10;
  font-size: 2rem;
}
.hero_button {
  width: 120px;
  height: 50px;
  z-index: 10;
  font-size: 1rem;
  margin-top: 20px;
  border-radius: 20px;
  background-color: #ffffff;
  transition: 1s all;
}
</style>
