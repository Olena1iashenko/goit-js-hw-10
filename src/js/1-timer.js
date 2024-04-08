// Описаний в документації
import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";
// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

import errorIcon from '../img/error.png';

const input = document.querySelector('#datetime-picker');
const timer = document.querySelector('.timer');
let userSelectedDate;
const startBtn = document.querySelector('[data-start]');
startBtn.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    if (selectedDates[0] < new Date()) {
      startBtn.disabled = true;
      iziToast.show({
        title: 'Error',
        message: 'Please choose a date in the future',
        titleColor: 'white',
        messageColor: 'white',
        backgroundColor: 'rgb(239, 64, 64)',
        iconUrl: errorIcon,
        position: 'topCenter',
        progressBarColor: 'rgb(181, 27, 27)'
    });
    }
    startBtn.disabled = false;
    userSelectedDate = selectedDates[0];
  },
};

flatpickr(input, options);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addZero(value) {
  return String(value).padStart(2, "0");
}

startBtn.addEventListener("click", () => {
  const intervalID = setInterval(() => {
    const diff = userSelectedDate - Date.now();
    if (diff <= 1000) { clearInterval(intervalID) };
    const { days, hours, minutes, seconds } = convertMs(diff);
  
    timer.querySelector("[data-days]").textContent = addZero(days);
    timer.querySelector("[data-hours]").textContent = addZero(hours);
    timer.querySelector("[data-minutes]").textContent = addZero(minutes);
    timer.querySelector("[data-seconds]").textContent = addZero(seconds);
  }, 1000);
});

