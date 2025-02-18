<script setup lang="ts">
// STORE
import { trailer } from "../store";

// VUE ROUTER
import { useRouter } from "vue-router";

// COMPONENT
import ButtonComponent from "../components/Button/ButtonComponent.vue";

const router = useRouter();

const trailerChange = () => {
  router.push({ path: "/" });
};
</script>

<template>
  <div class="container-trailer">
    <div class="background-effect-image">
      <img alt="maximum image url" :src="trailer?.bg" class="hero-bg" />
      <div class="trailer-iframe">
        <h1 class="trailer-title">Trailer</h1>
        <iframe :src="trailer?.url?.replace('autoplay=1', 'autoplay=0')">
        </iframe>
        <ButtonComponent
          text="Go Back"
          bgColor="#FFFFFF"
          textColor="#000000"
          :eventFunction="() => trailerChange()"
        />
      </div>
    </div>
  </div>
</template>
