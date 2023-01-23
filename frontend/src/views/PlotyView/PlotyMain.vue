<template>
  <div class="chart__wrapper">
    <div id="chart" />
  </div>
</template>

<script lang="ts" setup>
import Plotly from "plotly.js-dist-min";
import { useRoute } from "vue-router";
import { computed, onMounted, ref } from "vue";

const data = ref([
  {
    x: [1, 2, 3, 4],
    y: [10, 15, 13, 17],
    type: "scatter",
  },
]);

onMounted(() => {
  const TESTER = document.getElementById("chart");
  Plotly.newPlot(
    TESTER,
    [
      {
        x: data.value[0].x,
        y: data.value[0].y,
      },
    ],
    {
      margin: { t: 0 },
    }
  );
});

const route = useRoute();
const typeChartV = computed(() => {
  return route.params.type;
});
</script>