<template>
  <div class="home-description-library">
    <h1>Data-Driven Documents</h1>
    <svg width="96" height="91" style="position:relative" class="svg-desc">
      <clipPath id="clip">
        <path d="M0,0h7.75a45.5,45.5 0 1 1 0,91h-7.75v-20h7.75a25.5,25.5 0 1 0 0,-51h-7.75zm36.2510,0h32a27.75,27.75 0 0 1 21.331,45.5a27.75,27.75 0 0 1 -21.331,45.5h-32a53.6895,53.6895 0 0 0 18.7464,-20h13.2526a7.75,7.75 0 1 0 0,-15.5h-7.75a53.6895,53.6895 0 0 0 0,-20h7.75a7.75,7.75 0 1 0 0,-15.5h-13.2526a53.6895,53.6895 0 0 0 -18.7464,-20z"></path>
      </clipPath>
      <linearGradient id="gradient-1" gradientUnits="userSpaceOnUse" x1="7" y1="64" x2="50" y2="107">
        <stop offset="0" stop-color="#f9a03c"></stop>
        <stop offset="1" stop-color="#f7974e"></stop>
      </linearGradient>
      <linearGradient id="gradient-2" gradientUnits="userSpaceOnUse" x1="2" y1="-2" x2="87" y2="84">
        <stop offset="0" stop-color="#f26d58"></stop>
        <stop offset="1" stop-color="#f9a03c"></stop>
      </linearGradient>
      <linearGradient id="gradient-3" gradientUnits="userSpaceOnUse" x1="45" y1="-10" x2="108" y2="53">
        <stop offset="0" stop-color="#b84e51"></stop>
        <stop offset="1" stop-color="#f68e48"></stop>
      </linearGradient>
      <g clip-path="url(#clip)">
        <path d="M-100,-102m-27,0v300h300z" fill="url(#gradient-1)"></path>
        <path d="M-100,-102m27,0h300v300z" fill="url(#gradient-3)"></path>
        <path d="M-100,-102l300,300" fill="none" stroke="url(#gradient-2)" stroke-width="40"></path>
      </g>
    </svg>
    <div>
      <h2>Описание</h2>
      <p>
        D3.js — мощная JavaScript библиотека для визуализации данных, с открытым исходным кодом.
        Имеет более 20 тысяч форков на GitHub. По сути своей, D3 больше походит на фреймворк, нежели на библиотеку.
        Работать с ней не так просто, особенно поначалу.
        Но существует множество полезных информационных ресурсов, посвященных D3.
        И в итоге с помощью этой библиотеки можно с нуля создавать потрясающие оригинальные визуализации
        и любую графику, что делает D3 действительно стоящим инструментом.
      </p>
      <h3>Основные возможности</h3>
      <ul>
        <li>
          Поддерживает многочисленные типы графиков, намного больше, чем
          подавляющее большинство других JavaScript библиотек
        </li>
        <li>
          На освоение нужно время. Менее понятная и очевидная, чем некоторые
          коммерческие библиотеки в списке (например, AnyChart).
          Компенсируется огромным количеством туториалов и реально крутым API.
        </li>
        <li>Сочетает в себе мощные компоненты визуализации и основанный на данных подход к манипулированию DOM.</li>
        <li>Легко дебажить с помощью инструмента исследования элементов в браузере.</li>
        <li>Море примеров.</li>
        <li>Функции генерации кривых.</li>
        <li>Drag-and-drop GUI.</li>
        <li>
          D3 — это open-source библиотека для создания графиков и диаграмм,
          которая абсолютно бесплатна для применения в любых целях.
        </li>
      </ul>
      <h3>Ссылки</h3>
      <a href="https://d3js.org/" target="_blank">Официальный сайт</a><br/>
      <a href="https://github.com/d3/d3/wiki" target="_blank">Документация</a><br/>
      <a
        href="https://github.com/d3/d3/releases"
        target="_blank"
        >GitHub</a
      ><br />
      <a
        href="https://observablehq.com/@d3/gallery"
        target="_blank"
        >Примеры</a
      >
    </div>
  </div>
</template>
