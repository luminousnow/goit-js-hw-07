// Масив об'єктів
const images = [
  {
    url:
      "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url:
      "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url:
      "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

// посилання на батьківський елемент
const galleryEl = document.querySelector("#gallery");

// перебираємо масив
const newImgArr = images.map((img) => {
  // створюємо новий "li"
  const newLi = document.createElement("li");

  // додаємо до "li" дочірній елемент
  newLi.insertAdjacentHTML(
    "afterbegin",
    `<img class="gallery__img" src="${img.url}" alt="${img.alt}" width="250" higth="166">`
  );

  return newLi;
});

// додає нові елементи в одну операцію
galleryEl.prepend(...newImgArr);
