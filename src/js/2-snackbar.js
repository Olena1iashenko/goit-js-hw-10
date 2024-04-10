// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector('.form');

form.addEventListener('submit', onSubmit);

function createPromise(state, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (state === 'fulfilled') resolve({ delay });
            if (state === 'rejected') reject({ delay });
        }, delay);
    });
}

function onSubmit(event) {
    event.preventDefault();
    
    const delay = Number(document.querySelector('input[name="delay"]').value);
    const state = document.querySelector('input[name="state"]:checked').value;
   
    createPromise (state, delay)
        .then(resolve => 
            iziToast.show({
        message: `✅ Fulfilled promise in ${resolve.delay}ms`,
        messageColor: 'white',
        backgroundColor: 'green',
        position: 'topRight'
            }),
            event.target.reset(),
        )
        .catch(error => 
          iziToast.show({
        message: `❌ Rejected promise in ${error.delay}ms`,
        messageColor: 'white',
        backgroundColor: 'red',
        position: 'topRight'
          }),
          event.target.reset(),
    );
}