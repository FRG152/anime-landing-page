<script setup lang="ts">
// VUE
import { onMounted } from "vue";

// GSAP
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  const clipAnimation = gsap.timeline({
    scrollTrigger: {
      trigger: "#container_anime",
      start: "center center",
      end: "center",
      scrub: 5,
      pin: true,
    },
  });
  clipAnimation
    .to("#anime_title", {
      duration: 5,
      right: 0,
    })
    .to("#anime_desc", {
      duration: 5,
      top: 0,
    })
    .to("#anime_video_01", {
      duration: 5,
      width: "100%",
      height: "100%",
      opacity: 1,
    })
    .to("#anime_video_02", {
      duration: 5,
      width: "100%",
      height: "100%",
      opacity: 1,
    })
    .to("#anime_video_01", {
      duration: 5,
      width: "0%",
      height: "100%",
      opacity: 0,
    });
});
</script>

<template>
  <section id="container_anime" :class="$style.container_anime">
    <div :class="$style.box_video">
      <video
        id="anime_video_01"
        src="/public/videos/clip_01.mp4"
        loop
        muted
        autoplay
        :class="$style.anime_video"
      />
      <video
        id="anime_video_02"
        src="/public/videos/clip_02.mp4"
        loop
        muted
        autoplay
        :class="$style.anime_video"
      />
    </div>
    <p id="anime_desc" :class="$style.anime_desc">
      Dive into captivating stories, stunning visuals, and unforgettable
      journeys. From thrilling battles to heartfelt moments, uncover a universe
      of endless possibilities!
    </p>
    <h1 id="anime_title" :class="$style.anime_title">Anime</h1>
  </section>
</template>

<style module>
.container_anime {
  height: calc(100vh - 100px);
  padding: 50px;
  position: relative;
  overflow: hidden;
}
.box_video {
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  background-color: #000000;
}
.anime_video {
  width: 0%;
  height: 0%;
  object-fit: cover;
  border-radius: 20px;
}
.anime_desc {
  color: #ffffff;
  top: -1500px;
  left: 0;
  bottom: 0;
  display: flex;
  position: absolute;
  align-items: center;
  padding-left: 60px;
  justify-content: center;
  max-width: 350px;
  font-size: 2rem;
}
.anime_desc::before {
  content: "";
  top: 0;
  left: 20px;
  bottom: 0;
  position: fixed;
  background-color: #dddddd;
  margin: auto;
  height: 95%;
  width: 1px;
}
.anime_title {
  color: #ffffff;
  top: 0;
  right: 40%;
  bottom: 0;
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  font-size: 8rem;
  font-weight: 700;
  padding-right: 60px;
  text-transform: uppercase;
}
</style>
