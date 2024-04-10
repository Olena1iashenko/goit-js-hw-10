// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector('.form');

form.addEventListener('submit', onSubmit);

function createPromise(state, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (state === 'fulfilled') resolve(delay);
            if (state === 'rejected') reject(delay);
        }, timeout);
    });
}

function onSubmit(event) {
    event.preventDefault();
    
    const delay = document.querySelector('input[name="delay"]');
    const state = document.querySelectorAll('input[name="state"]:checked').value;

    createPromise (state, delay)
        .then(result => {
            iziToast.show({
        message: `✅ Fulfilled promise in ${delay.value}ms`,
        messageColor: 'white',
        backgroundColor: 'green',
        position: 'topRight'
            });
            event.target.reset();
        })
        .catch(error => {
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