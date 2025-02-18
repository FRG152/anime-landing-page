<script setup lang="ts">
// VUE
import { defineProps } from "vue";

interface Props {
  title: string;
  desc: string;
  style?: {
    top?: string;
    left?: string;
    right?: string;
    bottom?: string;
    position?: any;
  };
}

const { title, desc, style } = defineProps<Props>();
</script>

<template>
  <div class="container-column" :style="style">
    <h1 class="column-title">{{ title }}</h1>
    <p class="column-desc">{{ desc }}</p>
  </div>
</template>
