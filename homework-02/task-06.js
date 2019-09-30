let input;
const numbers = [];
let total = 0;
const userNumber = Number.parseFloat(input);
const YOU_NUMBER = 'Введите ваше число:';

while (input !== null) {
  input = prompt(YOU_NUMBER, 0);
  const userNumber = +input;
  numbers.push(userNumber);
}
for (const number of numbers) {
  total += number;
}

const TOTAL_SUM_MESSAGE = `Общая сумма чисел равна ${total}`;

console.log(TOTAL_SUM_MESSAGE);
