import { createApp } from "vue";

import Vue from "vue";
import App from "./App";
import About from "./views/About.vue";
import Home from "./views/Home.vue";
import router from "./router";

const app = createApp(App).use(router);
app.mount("#app");
