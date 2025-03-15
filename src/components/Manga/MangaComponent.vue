<script setup lang="ts">
import gsap from "gsap";
import { onMounted } from "vue";

onMounted(() => {
  const timeLine = gsap.timeline({
    scrollTrigger: {
      trigger: "#container_manga",
      pin: true,
      scrub: 1,
      start: "end end",
    },
  });
  timeLine.to("#title_manga", {
    opacity: 1,
    duration: 2,
  });
  timeLine.to("#bg_manga", {
    opacity: 1,
    duration: 2,
  });
  timeLine.to("#desc_manga", {
    opacity: 1,
    duration: 2,
  });
});
</script>

<template>
  <section id="container_manga" :class="$style.container_manga">
    <div :class="$style.grid_01">
      <h1 id="title_manga" :class="$style.title_manga">Manga</h1>
      <img
        id="bg_manga"
        src="/public/image/manga_bg.png"
        alt="manga bg"
        :class="$style.bg_manga"
      />
    </div>
    <div :class="$style.grid_02">
      <p id="desc_manga" :class="$style.desc_manga">
        Step into a world of rich storytelling, intricate illustrations, and
        compelling characters. From timeless classics to the latest releases,
        find the perfect manga to fuel your imagination!
      </p>
    </div>
  </section>
</template>

<style module>
.container_manga {
  display: grid;
  position: relative;
  min-height: 100vh;
  grid-template-columns: 40% 50%;
}
.grid_01,
.grid_02 {
  position: relative;
}
.bg_manga {
  width: 100%;
  height: 100%;
  opacity: 0;
  object-fit: cover;
}
.title_manga {
  color: #000;
  width: 100%;
  height: 100%;
  opacity: 0;
  display: flex;
  position: absolute;
  font-size: 4rem;
  align-items: center;
  vertical-align: text-top;
  justify-content: center;
  text-orientation: upright;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 50;
}
.desc_manga {
  color: #fff;
  width: 100%;
  height: 100%;
  display: flex;
  opacity: 0;
  /* position: absolute; */
  font-size: 2rem;
  text-align: center;
  align-items: center;
  justify-content: center;
  /* top: 0; */
  /* left: 0; */
  /* right: 0; */
  /* bottom: 0; */
}
</style>
