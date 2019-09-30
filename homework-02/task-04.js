const formatString = function (string) {
  const lengthLimit = 40;
  let trimmedString;

  if (string.length <= 40) {
    return string;
  }

  return (trimmedString = `${string.substring(0, lengthLimit)}...`);
};

console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// вернется оригинальная строка

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// вернется форматированная строка

console.log(formatString('Curabitur ligula sapien.'));
// вернется оригинальная строка

console.log(
  formatString(
    'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
  ),
);
// вернется форматированная строка
