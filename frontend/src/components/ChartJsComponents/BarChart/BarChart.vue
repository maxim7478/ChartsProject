<template>
  <Bar
    id="bar-chart-id"
    :options="chartOptions"
    :data="chartData"
  />
</template>

<script setup lang="ts">
import { Bar } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { ref } from "vue";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

const chartOptions = ref({
  responsive: true,
});

const chartData = ref({
  labels: ["January", "February", "March"],
  datasets: [
    {
      data: [40, 20, 12],
      label: "Data One",
      backgroundColor: "#f87979",
    },
  ],
});
</script>

<style scoped>

</style>