<template>
  <div class="chart-js-view">
    <div class="list-sub-routes">
      <div
        class="list-sub-routes__item"
        v-for="(item, index) in typesChartArr"
        :key="index"
      >
        <router-link
          :to="{ name: 'itemGoogleCharts', params: { type: item } }"
          @click="switchChart(item)"
          >{{ item }}</router-link
        >
      </div>
    </div>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const typesChartArr = ref([
  "AreaChart",
  "ColumnChart",
  "BubbleChart",
  "CandlestickChart",
]);
const typeChart = ref("bar");
const switchChart = (type: string) => {
  typeChart.value = type;
};
</script>
