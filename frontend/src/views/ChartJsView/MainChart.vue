<template>
  <bar-chart v-if="typeChartV === 'Bar'" />
  <line-chart v-if="typeChartV === 'Line'"/>
  <doughnut-chart v-if="typeChartV === 'Doughnut'"/>
  <pie-chart v-if="typeChartV === 'Pie'"/>
  <radar-chart v-if="typeChartV === 'Radar'"/>
</template>

<script lang="ts" setup>
import BarChart from "@/components/ChartJsComponents/BarChart/BarChart.vue";
import { useRoute } from "vue-router";
import { computed } from "vue";
import LineChart from "@/components/ChartJsComponents/LineChart/LineChart.vue";
import DoughnutChart from "@/components/ChartJsComponents/DoughnutChart/DoughnutChart.vue";
import PieChart from "@/components/ChartJsComponents/PieChart/PieChart.vue";
import RadarChart from "@/components/ChartJsComponents/RadarChart/RadarChart.vue";

const route = useRoute();
const typeChartV = computed(() => {
  return route.params.type;
});
</script>
