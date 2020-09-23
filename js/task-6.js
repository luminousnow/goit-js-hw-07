// посилання на input
const inputRef = document.querySelector("#validation-input");
// посилання на дата-атрибут довжини, приведений в число
const correctLength = Number(inputRef.dataset.length);

// слухає втрачений фокус
inputRef.addEventListener("blur", onInputInsertData);

// коллбек перевіряє та додає класи
function onInputInsertData(event) {
  event.preventDefault();

  if (correctLength === event.currentTarget.value.length) {
    inputRef.classList.add("valid");
    inputRef.classList.remove("invalid");
  } else {
    inputRef.classList.remove("valid");
    inputRef.classList.add("invalid");
  }
}
