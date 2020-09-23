// посилання
const refs = {
  inputFontSize: document.querySelector("#font-size-control"),
  text: document.querySelector("#text"),
};

// слухаю input
refs.inputFontSize.addEventListener("input", onSizeChange);

function onSizeChange(event) {
  refs.text.style.fontSize = `${event.currentTarget.value}px`;
}
