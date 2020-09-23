// посилання на input дані
const placeholderRef = document.querySelector("#name-input");
// console.log(placeholderRef);

// посилання на вивід даних
const outputRef = document.querySelector("#name-output");
// console.log(outputRef);

// слухач подій на ВВІД
placeholderRef.addEventListener("input", onInputDataAdd);

// коллбек з перевіркою
function onInputDataAdd(event) {
  // відключення оновлення сторінки
  event.preventDefault();

  // перевірка на відсутність введених даних
  if (event.currentTarget.value !== ``) {
    outputRef.textContent = event.currentTarget.value;
  } else outputRef.textContent = "незнакомец";
}
