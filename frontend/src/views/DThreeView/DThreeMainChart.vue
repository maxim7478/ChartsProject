<template>
  <line-chart-d-three v-if="typeChartV === 'Line'"/>
</template>

<script lang="ts" setup>
import { useRoute } from "vue-router";
import { computed } from "vue";
import LineChartDThree from "@/components/DThreeComponents/LineChart/LineChartDThree.vue";

const route = useRoute();
const typeChartV = computed(() => {
  return route.params.type;
});
</script>
