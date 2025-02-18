<script setup lang="ts">
// VUE
import { defineProps } from "vue";

interface Props {
  title: string;
  desc: string | number;
  style?: {
    backgroundColor?: string;
  };
}

const { title, desc, style } = defineProps<Props>();
</script>

<template>
  <div class="container-inidicator">
    <h1 class="inidicator-title">{{ title }}</h1>
    <div class="inidicator-box" :style="style">
      <p>{{ desc?.toString() }}</p>
    </div>
  </div>
</template>
