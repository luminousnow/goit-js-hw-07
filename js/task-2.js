const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

// посилання на батьківський елемент, "список Інгридієнтів"
const ingredientsEl = document.querySelector("#ingredients");

// перебираємо масив інгридієнтів
const newListEl = ingredients.map((item) => {
  // створюємо елемент
  const newElement = document.createElement("li");
  // додаємо текст елементу
  newElement.textContent = item;

  return newElement;
});

// додає нові елементи
ingredientsEl.prepend(...newListEl);
