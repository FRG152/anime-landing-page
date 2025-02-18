import { reactive, ref } from "vue";

export const trailer = reactive({ url: "", show: true, bg: "" });

export const topAnimeStore = reactive({
  data: {},
  list: [],
  recommendation: [],
});

export const recommendationStore = reactive({ data: [] });
