import HomeView from "../Views/HomeView.vue";
import TrailerView from "../Views/TrailerView.vue";
import NotFoundView from "../Views/NotFoundView.vue";
import { createMemoryHistory, createRouter } from "vue-router";

const routes = [
  { path: "/", name: "home", component: HomeView },
  { path: "/trailer", name: "trailer", component: TrailerView },
  { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFoundView },
];

export const router = createRouter({ history: createMemoryHistory(), routes });
