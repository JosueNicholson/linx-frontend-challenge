import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/login",
      name: "login",
      component: () => import("../views/LoginView.vue"),
    },
    {
      name: "home",
      path: "/",
      meta: {
        requiresAuth: true,
      },
      children: [
        {
          path: "/after-login",
          name: "after-login",
          component: () => import("../views/AlbumView.vue"),
        },
        {
          path: "/album/:id",
          component: () => import("../views/AlbumView.vue"),
        },
      ],
    },
  ],
});

router.beforeEach((to) => {
  console.log(to);
  const token = window.localStorage.getItem("access_token");
  if (to.name === "after-login") return true;
  if (to.meta?.requiresAuth && !token) return "login";
  if (token && to.name === "login") return "home";
  return true;
});

export default router;
