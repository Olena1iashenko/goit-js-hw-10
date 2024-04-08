// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector('.form');
const delay = document.querySelector('input[name="delay"]');
const states = document.querySelectorAll('input[name="state"]')

form.addEventListener('submit', onSubmit);

function onSubmit(event) {
    event.preventDefault();
    
    const state = [...states].find(markup => markup.checked).value;

    const promise = new Promise((resolve, reject) => {
        if (state === 'fulfilled') setTimeout(() => resolve(delay), delay);
        if (state === 'rejected') setTimeout(() => reject(delay), delay);
    });

    promise.then(
      (delay) => {
            console.log(`✅ Fulfilled promise in ${delay.value}ms`);
            iziToast.show({
        message: `✅ Fulfilled promise in ${delay.value}ms`,
        messageColor: 'white',
        backgroundColor: 'green',
        position: 'topRight'
            });
            event.target.reset();
      },
      (delay) => {
          console.log(`❌ Rejected promise in ${delay.value}ms`);
          iziToast.show({
        message: `❌ Rejected promise in ${delay.value}ms`,
        messageColor: 'white',
        backgroundColor: 'red',
        position: 'topRight'
          });
          event.target.reset();
      }
    );
}