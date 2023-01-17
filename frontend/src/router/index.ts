import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/charts-js/",
      name: "chartJs",
      component: () => import("@/views/ChartJsView/ChartJsView.vue"),
      redirect: { name: "chartsJsHome" },
      children: [
        {
          path: "home",
          name: "chartsJsHome",
          component: () =>
            import("@/components/ChartJsComponents/ChartsJsHome.vue"),
        },
        {
          path: "chart/:type",
          name: "itemChartJs",
          component: () =>
            import("@/views/ChartJsView/MainChart.vue"),
        },
      ],
    },
  ],
});

export default router;
