<script setup lang="ts">
// GSAP
import gsap from "gsap";

// VUE
import { onMounted } from "vue";

onMounted(() => {
  // const timeLine = gsap.timeline({
  //   scrollTrigger: {
  //     trigger: "#container_hero",
  //     pin: true,
  //     scrub: 1,
  //     start: "end end",
  //   },
  // });
  gsap.fromTo(
    "#hero_title",
    {
      duration: 6,
      opacity: 0,
    },
    {
      duration: 6,
      opacity: 1,
    }
  );
  gsap.fromTo(
    "#hero_desc",
    {
      duration: 5,
      opacity: 0,
    },
    {
      duration: 5,
      opacity: 1,
    }
  );
  gsap.fromTo(
    "#hero_button",
    {
      duration: 7,
      opacity: 0,
    },
    {
      duration: 7,
      opacity: 1,
    }
  );
});
</script>

<template>
  <section id="container_hero" :class="$style.container_hero">
    <!-- <div :class="$style.grid_01"> -->
    <h1 id="hero_title" :class="$style.hero_title">ANIME PORTAL</h1>
    <p id="hero_desc" :class="$style.hero_desc">
      Discover, Explore, and Immerse <br />
      Yourself in the World of Anime
    </p>
    <button id="hero_button" :class="$style.hero_button">
      <p>See More</p>
      <div class="pi pi-arrow-down" />
    </button>
    <!-- <video
        id="anime_video_01"
        src="/public/videos/clip_01.mp4"
        loop
        muted
        autoplay
        :class="$style.anime_video"
      /> -->
    <!-- </div> -->
    <!-- <div :class="$style.grid_02"> -->

    <!-- <img
        :class="$style.hero_bg"
        src="/public/image/image.png"
        alt=""
        srcset=""
      /> -->
    <!-- </div> -->
  </section>
</template>

<style module>
.container_hero {
  /* display: grid; */
  overflow: hidden;
  position: relative;
  min-height: 100vh;
  /* grid-template-columns: 80% 20%; */
}
.grid_01 {
  position: relative;
}
.grid_02 {
  position: relative;
  background-color: #fff;
}
.social_media {
  display: flex;
  column-gap: 15px;
}
.hero_title {
  top: 0px;
  left: 20px;
  color: #fff;
  display: flex;
  position: absolute;
  font-size: 5rem;
  text-align: center;
  font-weight: 600;
  align-items: center;
  z-index: 10;
}
.hero_desc {
  color: #fff;
  /* top: 0; */
  /* right: 20px; */
  /* bottom: 100px; */
  /* position: absolute; */
  text-align: center;
  font-size: 2rem;
  z-index: 10;
}
.hero_button {
  width: 160px;
  height: 50px;
  padding: 0 20px;
  display: flex;
  font-size: 1rem;
  position: absolute;
  align-items: center;
  justify-content: space-around;
  background-color: #fff;
  z-index: 10;
  bottom: 20px;
  right: 20px;
}
.hero_button > p {
  font-weight: 300;
}
.hero_bg {
  left: 0;
  right: 0;
  bottom: 0;
  height: 300px;
  position: absolute;
  object-fit: contain;
  margin: auto;
}
.anime_video {
  width: 100%;
  height: 70%;
  margin: auto;
  position: absolute;
  align-self: center;
  object-fit: cover;
  align-items: center;
  bottom: 0;
  top: 0;
}
</style>
