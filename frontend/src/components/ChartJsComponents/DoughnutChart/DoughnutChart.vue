<template>
  <Doughnut :data="data" :options="options" />
</template>

<script setup lang="ts">
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "vue-chartjs";
import { ref } from "vue";

ChartJS.register(ArcElement, Tooltip, Legend)

const data = ref({
  labels: ["VueJs", "EmberJs", "ReactJs", "AngularJs"],
  datasets: [
    {
      backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
      data: [40, 20, 80, 10]
    }
  ]
})

const options = ref({
  responsive: true,
  maintainAspectRatio: false,
});
</script>
