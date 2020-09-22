const btnDecremRef = document.querySelector('button[data-action="decrement"]');
// console.log(btnDecremRef);
const btnIncremRef = document.querySelector('button[data-action="increment"]');
// console.log(btnIncremRef);
const counterRef = document.querySelector("#value");
// console.log(counterRef);
let counterValue = 0;
// console.log(counterValue);

function onDecrementBtnClick(event) {
  counterValue -= 1;
  counterRef.textContent = counterValue;
}
btnDecremRef.addEventListener("click", onDecrementBtnClick);

function onIncrementBtnClick(event) {
  counterValue += 1;
  counterRef.textContent = counterValue;
}
btnIncremRef.addEventListener("click", onIncrementBtnClick);
