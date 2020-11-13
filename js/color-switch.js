
/*
Есть массив цветов в hex-формате и кнопки Start и Stop.

<button type="button" data-action="start">Start</button>
<button type="button" data-action="stop">Stop</button>
const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];
Напиши скрипт, который после нажатия кнопки Start, раз в секунду меняет цвет фона body на случайное значение из массива используя инлайн-стиль. 
При нажатии на кнопку Stop, изменение цвета фона должно останавливаться.

⚠️ Учти, на кнопку Start можно нажать бесконечное количество раз. 
Сделай так, чтобы пока изменение темы запушено, кнопка Start была не активна.

Для генерации случайного числа (индекс элемента массива цветов), используй функцию randomIntegerFromInterval.

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
*/

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

let backgroundInterval = null;

const start = document.querySelector('[data-action="start"]');
const stop = document.querySelector('[data-action="stop"]');
const body = document.querySelector('body');

start.addEventListener('click', onColorSwitchStart);
stop.addEventListener('click', OnColorSwichStop);

stop.disabled = true;

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

function bacgroundSwich() {
    return body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)]

};

function onColorSwitchStart() {
    backgroundInterval = setInterval(bacgroundSwich, 1000);

    stop.disabled = false;
    start.disabled = true;
};

function OnColorSwichStop() {
    clearInterval(backgroundInterval);

    stop.disabled = true;
    start.disabled = false;

}