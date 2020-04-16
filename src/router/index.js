import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/start",
  },
  {
    path: "/start",
    component: () => import("../views/start.vue"),
  },
  {
    path: '/index',
    component: () => import("../views/index.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
