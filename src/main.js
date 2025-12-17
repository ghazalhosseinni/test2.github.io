import { createApp } from "vue";
import "./assets/sass/style.scss";
import App from "./App.vue";
//animation aos
import "aos/dist/aos.css";
import AOS from "aos";
// Initialize AOS
AOS.init({
  duration: 2000, // Animation duration in ms
  easing: "ease-in-out", // Easing function
  once: true, // Whether animation should happen only once
});
// vue router
import router from "./router/index.js";
// vuetify
import { vuetify } from "./plugins/vuetify.js";
// mitt
import mitt from "mitt";
const emitter = mitt();
// axios
import Axios from "axios";
// NProgress
import NProgress from "nprogress";
import "nprogress/nprogress.css";
// Router Navigation Guards
router.beforeEach((to, from, next) => {
  NProgress.start();
  next();
});
router.afterEach(() => {
  NProgress.done();
});

const app = createApp(App);

// to use globally
app.config.globalProperties.$http = Axios;
// mitt
app.config.globalProperties.emitter = emitter;
// baseUrl
app.config.globalProperties.baseUrl = import.meta.env.VITE_BASE_URL;
// headers
app.config.globalProperties.headers = {
  headers: {
    Authorization: "Bearer " + localStorage.getItem("token"),
  },
};
app.use(vuetify);
app.use(router).mount("#app");
