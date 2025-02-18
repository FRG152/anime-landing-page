<script setup lang="ts">
// VUE
import { defineProps } from "vue";

interface Props {
  text?: string;
  icon?: string;
  bgColor: string;
  bdRadius?: string;
  textColor?: string;
  eventFunction?: () => void;
  eventMouseEnter?: () => void;
  eventMouseLeave?: () => void;
}

const { text, icon, bgColor, bdRadius, textColor } = defineProps<Props>();
</script>

<template>
  <button
    :class="$style.btn_box"
    :style="`background-color: ${bgColor}; border-radius: ${bdRadius}`"
    @click="eventFunction"
    @mouseenter="eventMouseEnter"
    @mouseleave="eventMouseLeave"
  >
    <p v-if="text" :class="$style.btn_text" :style="{ color: textColor }">
      {{ text }}
    </p>
    <i v-if="icon" :class="icon" style="color: #000000; font-size: 1.5rem" />
  </button>
</template>

<style module>
.btn_box {
  width: 50px;
  height: 50px;
  display: flex;
  transition: all 0.2s;
  align-items: center;
  justify-content: center;
  z-index: 100;
  margin: 10px 0;
  gap: 10px;
}
.btn_box:hover {
  transform: scale(1.05);
}
.btn_text {
  font-size: 1rem;
  font-weight: 500;
}
</style>
