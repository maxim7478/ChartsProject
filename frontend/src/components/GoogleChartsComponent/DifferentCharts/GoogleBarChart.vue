<template>
  <GChart
    :type="typeChart"
    :data="chartData"
    :options="chartOptions"
    style="min-height: 500px"
  />
</template>

<script setup lang="ts">
import { GChart } from "vue-google-charts";

withDefaults(
  defineProps<{
    typeChart?: string;
  }>(),
  {
    typeChart: "AreaChart",
  }
);

const chartData = [
  ["day", "a", "b", "c", "d"],
  ["Mon", 20, 28, 38, 45],
  ["Tue", 31, 38, 55, 66],
  ["Wed", 50, 55, 77, 80],
  ["Thu", 50, 77, 66, 77],
  ["Fri", 15, 66, 22, 68],
];
const chartOptions = {
  chart: {
    title: "Company Performance",
    subtitle: "Sales, Expenses, and Profit: 2014-2017",
  },
};
</script>
