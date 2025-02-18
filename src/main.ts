import "./style.css";
import "aos/dist/aos.css";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "primeicons/primeicons.css";
import AOS from "aos";
import App from "./App.vue";
import { createApp } from "vue";
import { router } from "./routes";
AOS.init();

const app = createApp(App);
app.use(router);
app.mount("#app");
