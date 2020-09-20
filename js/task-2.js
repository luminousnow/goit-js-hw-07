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
  // тимчасовий масив для нових елементів списку
  const tempList = [];

  // створюємо елемент списку
  const newListElement = document.createElement("li");
  // призначаємо текст для елементу списку
  newListElement.textContent = item;
  // пушимо новостворений елемент до тимчасової колекції
  tempList.push(newListElement);

  //   додає нові елементи в список в одну операцію
  ingredientsEl.appendChild(...tempList);
});
