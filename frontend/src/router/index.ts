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
    {
      path: "/d-three/",
      name: "dThreeLibrary",
      component: () => import("@/views/DThreeView/DThreeView.vue"),
      redirect: { name: "dThreeHome" },
      children: [
        {
          path: "home",
          name: "dThreeHome",
          component: () =>
            import("@/components/DThreeComponents/DThreeHome.vue"),
        },
        {
          path: "chart/:type",
          name: "itemDThree",
          component: () => import("@/views/DThreeView/DThreeMainChart.vue"),
        },
      ],
    },
    {
      path: "/google-charts/",
      name: "googleCharts",
      component: () => import("@/views/GoogleChartsView/GoogleChartsView.vue"),
      redirect: { name: "googleChartsHome" },
      children: [
        {
          path: "home",
          name: "googleChartsHome",
          component: () =>
            import("@/components/GoogleChartsComponent/GoogleChartsHome.vue"),
        },
        {
          path: "chart/:type",
          name: "itemGoogleCharts",
          component: () =>
            import("@/views/GoogleChartsView/GoogleChartsMain.vue"),
        },
      ],
    },
  ],
});

export default router;
