"use strict";

// 1. Найти по id, используя getElementById, элемент с id равным "super_link" и вывести этот элемент в консоль.

const elemID = document.getElementById("super_link");
console.log(elemID);
// 2. Внутри всех элементов на странице, которые имеют класс "card-link", поменяйте текст внутри элемента на "ссылка".

let cardLink = document.querySelectorAll(".card-link");
cardLink.forEach((link) => {
  link.textContent = "ссылка";
});
// 3. Найти все элементы на странице с классом "card-link", которые лежат в элементе с классом "card-body" и вывести полученную коллекцию в консоль.

const cardBodyLink = document.querySelectorAll(".card-body .card-link");
console.log(cardBodyLink);
// 4. Найти первый попавшийся элемент на странице у которого есть атрибут data-number со значением 50 и вывести его в консоль.

const dataNumber = document.querySelector('[data-number ="50"]');
console.log(dataNumber);
// 5. Выведите содержимое тега title в консоль.

console.log(document.title);
// 6. Получите элемент с классом "card-title" и выведите его родительский узел в консоль.

const cardTitle = document.getElementsByClassName("card-title")[0];
console.log(cardTitle.parentNode);
// 7. Создайте тегp`, запишите внутри него текст "Привет" и добавьте созданный тег в начало элемента, который имеет класс "card".

const helloCard = document.createElement("p");
helloCard.innerHTML = "Привет";

const startCard = document.getElementsByClassName("card")[0];
startCard.insertBefore(helloCard, startCard.firstChild);
// 8. Удалите тег h6 на странице.

const tegH6 = document.getElementsByTagName("h6")[0];
tegH6.remove();
