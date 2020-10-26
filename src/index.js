import colors from './js/colors.json';
import './css/styles.css';

const DELAY = 1000;
let intervalId = null;
let isActive = false;

const refs = {
    startBtn: document.querySelector('button[data-action="start"]'),
    stopBtn: document.querySelector('button[data-action="stop"]'),
    body: document.body,
}

refs.startBtn.addEventListener('click', onStartBtnClick);
refs.stopBtn.addEventListener('click', onStopBtnClick);

function onStartBtnClick() {
    if (isActive) {
        return;
    }
    isActive = true;
    intervalId = setInterval(() => {
        refs.body.style.backgroundColor = colors[randomIntegerFromInterval(0, 5)];
    }, DELAY);
}

function onStopBtnClick() {
    clearInterval(intervalId);
    isActive = false;
}

function randomIntegerFromInterval (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
