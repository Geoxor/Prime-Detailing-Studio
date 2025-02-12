import { RouteRecordRaw } from "vue-router";

export const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "home",
    component: () => import("./views/Home.vue"),
    meta: {
      title: `Prime Detailing Studio | Home`,
    },
  },

  {
    path: "/services",
    name: "services",
    component: () => import("./views/Services.vue"),
    meta: {
      title: `Prime Detailing Studio | Services`,
    },
  },
  {
    path: "/projects",
    name: "projects",
    component: () => import("./views/Projects.vue"),
    meta: {
      title: `Prime Detailing Studio | Projects`,
    },
  },
  {
    path: "/contact",
    name: "contact",
    component: () => import("./views/Contact.vue"),
    meta: {
      title: `Prime Detailing Studio | Contact`,
    },
  },
  {
    path: "/training",
    name: "training",
    component: () => import("./views/Training.vue"),
    meta: {
      title: `Prime Detailing Studio | Training`,
    },
  },
];
