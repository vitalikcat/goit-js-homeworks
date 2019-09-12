let inputNumber = '';
let total = 0;

do {
  inputNumber = prompt('Введите число: ');
  total = Number(inputNumber) + total;
} while (inputNumber != null);

console.log(total);
