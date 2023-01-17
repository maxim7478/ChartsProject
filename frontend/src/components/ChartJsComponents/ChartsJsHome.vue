<template>
  <div class="charts-js-home">
    <img src="@/assets/images/chartjs-logo.svg">
    <div>
      <h2>Описание</h2>
      <p>
        Chart.js — простая и в то же время довольно гибкая JavaScript библиотека для визуализации данных, популярная среди веб-дизайнеров и разработчиков. Она представляет собой прекрасное базовое решение для тех, кому не требуется большое разнообразие типов графиков и индивидуальных настроек, но кому достаточно, чтобы графики выглядели аккуратно, наглядно и информативно.
      </p>
      <h3>Основные возможности</h3>
      <ul>
        <li>8 типов графиков и диаграмм: линейный (Line), линейный с областями (Area), линейчатый (Bar), круговой (Pie), лепестковый «Радар» (Radar), полярный (Polar), пузырьковый (Bubble) и точечная диаграмма рассеивания (Scatter).</li>
        <li>Все типы графиков можно кастомизировать и снабдить анимацией, и все они адаптивны при работе в сети.</li>
        <li>Функциональность может быть расширена посредством использования плагинов.</li>
        <li>Хорошая документация.</li>
        <li>Поддержка через Stack Overflow.</li>
        <li>Поддержка браузеров IE9+.</li>
        <li>Бесплатная библиотека с открытым исходным кодом (open-source). Издана под лицензией MIT.</li>
      </ul>
      <h3>Ссылки</h3>
      <a href="https://www.chartjs.org/" target="_blank">Официальный сайт</a><br/>
      <a href="https://www.chartjs.org/docs/latest/" target="_blank">Документация</a><br/>
      <a
        href="https://github.com/chartjs/Chart.js/releases/tag/v4.1.2"
        target="_blank"
        >GitHub</a
      ><br />
      <a
        href="https://vue-chartjs.org/examples/#vue-3-charts"
        target="_blank"
        >Примеры</a
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "ChartsJsHome"
}
</script>

<style scoped lang="scss">
.charts-js-home {
  display: grid;
  justify-content: center;
  align-items: center;
  height: 100%;
  & img {
    margin: 0 auto;
  }
}
</style>