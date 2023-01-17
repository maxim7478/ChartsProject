<template>
  <div class="chart-js-view">
    <div class="list-sub-routes">
      <div
        class="list-sub-routes__item"
        v-for="(item, index) in typesChartArr"
        :key="index"
      >
        <router-link
          :to="{ name: 'itemChartJs', params: { type: item } }"
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

const typesChartArr = ref(["Bar", "Line", "Doughnut", "Pie", "Radar"]);
const typeChart = ref("bar");
const switchChart = (type: string) => {
  typeChart.value = type;
};
</script>

<style lang="scss">
.list-sub-routes {
  display: flex;
  width: 100%;
  &__item {
    margin-right: 10px;
    & a {
      color: red;
    }
    & a:active {
      color: black;
    }
    & .router-link-active {
      color: var(--color-text);
    }
  }
}
</style>