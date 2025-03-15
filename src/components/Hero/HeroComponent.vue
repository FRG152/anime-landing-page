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
    <div :class="$style.hero_logo">AP</div>
    <div :class="$style.hero_box_bg">
      <video
        id="anime_video_01"
        src="/public/videos/clip_01.mp4"
        loop
        muted
        autoplay
        :class="$style.anime_video"
      />
    </div>
    <div :class="$style.hero_info">
      <h1 id="hero_title" :class="$style.hero_title">ANIME PORTAL</h1>
      <p id="hero_desc" :class="$style.hero_desc">
        Discover, Explore, and Immerse Yourself in <br />
        the World of Anime
      </p>
    </div>
    <button id="hero_button" :class="$style.hero_button">
      <p>See More</p>
      <div class="pi pi-arrow-down" />
    </button>
    <ul :class="$style.social_media">
      <a><i class="pi pi-facebook" /></a>
      <a><i class="pi pi-instagram" /></a>
      <a><i class="pi pi-twitter" /></a>
    </ul>
  </section>
</template>

<style module>
.container_hero {
  display: grid;
  overflow: hidden;
  position: relative;
  min-height: 100vh;
  place-items: center;
  background-image: linear-gradient(to bottom right, black, #252525);
}
.hero_info {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.hero_logo {
  top: 20px;
  left: 20px;
  color: #fff;
  font-size: 2rem;
  position: absolute;
}
.social_media {
  left: 20px;
  bottom: 20px;
  display: flex;
  row-gap: 10px;
  position: absolute;
  flex-direction: column;
}
.social_media > a {
  color: #fff;
  cursor: pointer;
  font-size: 1.3rem;
  transition: 0.2s all;
}
.social_media > a:hover {
  font-size: 2rem;
}
.hero_title {
  color: #fff;
  display: flex;
  font-size: 5rem;
  text-align: center;
  font-weight: 600;
  align-items: center;
}
.hero_desc {
  color: #fff;
  font-size: 2rem;
  text-align: center;
  z-index: 10;
}
.hero_button {
  width: 30px;
  height: 260px;
  padding: 0 20px;
  display: flex;
  position: absolute;
  align-items: center;
  writing-mode: vertical-lr;
  justify-content: space-around;
  background-color: #fff;
  z-index: 50;
  bottom: 20px;
  right: 20px;
}
.hero_button > p {
  font-size: 1rem;
  font-weight: 400;
  text-orientation: upright;
}
.hero_box_bg {
  right: 0;
  bottom: 0;
  overflow: hidden;
  position: absolute;
  width: 900px;
  height: 100%;
  clip-path: polygon(50% 0, 100% 0%, 100% 100%, 0% 100%);
}
.anime_video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
