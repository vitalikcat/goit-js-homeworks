const credits = 23580;
const pricePerDroid = 3000;

const inputNumberDroids = prompt('Сколько дроидов хотите купить? ');

if (inputNumberDroids === null) {
  console.log('Отменено пользователем!');
} else {
  const totalPrice = inputNumberDroids * pricePerDroid;
  if (totalPrice > credits) {
    console.log('Недостаточно средств на счету!');
  } else {
    console.log(
      `Вы купили ${inputNumberDroids} дроидов, на счету осталось ${credits
        - totalPrice} кредитов.`,
    );
  }
}
