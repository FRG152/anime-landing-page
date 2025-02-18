<script setup lang="ts">
// COMPONENT
import CardComponent from "../../components/Card/CardComponent.vue";

// API
import { getTopAnime } from "../../api/index.ts";

// STORE
import { topAnimeStore } from "../../store/index.ts";

// GSAP
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

// VUE
import { onMounted, ref } from "vue";

gsap.registerPlugin(ScrollTrigger);

const title = ref("");

const handleShow = async (name: string) => {
  title.value = name;
};

const handleHide = () => {
  // title.value = ""
};

onMounted(async () => {
  const result = await getTopAnime(``);
  topAnimeStore.recommendation = result?.data.data;

  const clipAnimation = gsap.timeline({
    scrollTrigger: {
      trigger: "#container_list",
      start: "center center",
      scrub: 1,
      pin: true,
      pinSpacing: true,
    },
  });

  clipAnimation.to("#list", {
    duration: 2,
    bottom: "130%",
  });
});
</script>

<template>
  <div id="container_list" :class="$style.container_list">
    <h1 id="title" :class="$style.title">Recommendation</h1>
    <div id="list" :class="$style.box_list">
      <div :class="$style.list">
        <div v-for="{ title, images } in topAnimeStore.recommendation">
          <CardComponent
            :images="images.jpg.image_url"
            :eventMouseEnter="() => handleShow(title)"
            :eventMouseLeave="() => handleHide()"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style module>
.container_list {
  display: flex;
  overflow: hidden;
  min-height: 100vh;
  flex-direction: column;
  background-color: #000000;
  position: relative;
}
.title {
  width: 100%;
  color: #ffffff;
  font-size: 3rem;
  text-align: center;
  height: 100vh;
  display: grid;
  place-items: center;
}
.box_list {
  flex: 1;
  height: 100vh;
  position: relative;
}
.list {
  display: flex;
  position: absolute;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
