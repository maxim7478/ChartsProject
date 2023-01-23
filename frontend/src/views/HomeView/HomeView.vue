<template>
  <main class="home-page">
    <img src="@/assets/logo.svg" alt="logo">
    <div class="home-page__list">
      <hr />
      <div class="home-page__list-wrapper">
        <h2 class="home-page__list-title">Charts JS</h2>
        <h2 class="home-page__list-alter-title">D3</h2>
        <h2 class="home-page__list-title">Google Charts</h2>
        <h2 class="home-page__list-alter-title">ChartsJS</h2>
        <h2 class="home-page__list-title">Ploty JS</h2>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
.home-page {
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & img {
    width: 50%;
    height: 50%;
    max-height: 300px;
  }
  & hr {
    border: none;
    border-right: 1px solid rgba(0, 0, 0, 0.11);
    height: 100%;
    margin-right: 10px;
  }
  &__list {
    width: 50%;
    display: flex;
    height: 100%;
    align-items: center;
    padding: 10px 0;
    &__wrapper {
      height: 100%;
      width: 100%;
      align-items: center;
      justify-content: center;
    }
    &-title {
      color: #d10257;
    }
    &-alter-title {
      color: #0077ff;
    }
  }
}
</style>