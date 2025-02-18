<script setup lang="ts">
// VUE
import { defineProps } from "vue";

interface Props {
  title?: string;
  images: string;
  date?: string;
  genres?: any;
  status?: string;
  eventMouseEnter?: () => void;
  eventMouseLeave?: () => void;
}

const props = defineProps<Props>();
</script>

<template>
  <div
    id="container_card"
    @mouseenter="eventMouseEnter"
    @mouseleave="eventMouseLeave"
    :class="$style.container_card"
  >
    <div :class="$style.card_box">
      <img alt="bg-image" :class="$style.card_image" :src="props.images" />
      <p :class="$style.card_name" v-if="title">{{ title }}</p>
    </div>
  </div>
</template>

<style module>
.container_card {
  cursor: pointer;
  display: flex;
  position: relative;
  transition: 0.2s all;
  align-items: center;
  z-index: 100;
  gap: 2rem;
}
.card_box {
  width: 230px;
  height: 340px;
  overflow: hidden;
}
.card_box > img:hover {
  transform: scale(1.1);
}
.card_image {
  width: 100%;
  height: 100%;
  transition: all 0.2s;
}
.card_name {
  color: #ffffff;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  text-align: center;
  font-weight: 600;
  background-color: #00000048;
}
</style>
