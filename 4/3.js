"use strict";

/*
Используя Math.random() необходимо сгенерировать массив, содержащий 5 цифр в 
диапазоне [0, 9].
После создания массива необходимо вывести в консоль следующие значения:
1. Сумму элементов массива
2. Минимальное значение в массиве
3. Новый массив, содержащий индексы сгенерированного выше массива, в которых 
значение равно 3.
Пример: Если у нас сгенерировался массив [2, 3, 5, 7, 3], то мы должны вывести 
в консоль массив [1, 4]. Такой массив получился потому что в сгенерированном
массиве тройки лежат под индексами 1 и 4. Если троек в сгенерированном массиве
не окажется, значит нужно будет вывести пустой массив.
*/

const array = [];
const arrayNew = [];
let sum = 0;
// let idx = array.indexOf(element);
for (let i = 0; i < 5; i++) {
  array.push(Math.trunc(Math.random() * 10));
  sum += array[i];
  array.forEach((item, index) => {
    if (item === 3) arrayNew.push(index + 1);
  });
  // while (idx !== -1) {
  //   arrayNew.push(idx);
  //   idx = array.indexOf(element, idx + 1);
  // }
}
console.log(array);
console.log(sum);
console.log(Math.min(...array));
console.log(arrayNew);
