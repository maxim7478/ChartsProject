<template>
  <google-bar-chart :typeChart="typeChartV" />
</template>

<script lang="ts" setup>
import { useRoute } from "vue-router";
import { computed } from "vue";
import GoogleBarChart from "@/components/GoogleChartsComponent/DifferentCharts/GoogleBarChart.vue";

const route = useRoute();
const typeChartV = computed(() => {
  return route.params.type;
});
</script>