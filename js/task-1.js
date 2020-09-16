// формує масив елементів категорії, масив
const itemCat = document.querySelectorAll("#categories .item");

// виводить загальну кількість категорій, число
console.log(`В списке ${itemCat.length} категории.`);

// перебирає елементи масиву
itemCat.forEach((element) => {
  // виводить назву категорії, текст
  console.log(`Категория: ${element.querySelector("h2").textContent}`);

  // виводить кількість елементів категорії, число
  console.log(`Количество элементов: ${element.querySelectorAll("li").length}`);
});
