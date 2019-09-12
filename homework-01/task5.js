let inputCountry = prompt('Введите вашу страну: ');

const costToChina = 100;
const costToChile = 250;
const costToAustralia = 170;
const costToIndia = 80;
const costToJamaica = 120;

if (inputCountry != null) {
  inputCountry = inputCountry.toLowerCase();
  switch (inputCountry) {
    case 'китай':
      console.log(
        `Доставка в ${inputCountry} будет стоить ${costToChina} кредитов`,
      );
      break;
    case 'чили':
      console.log(
        `Доставка в ${inputCountry} будет стоить ${costToChile} кредитов`,
      );
      break;
    case 'австралия':
      console.log(
        `Доставка в ${inputCountry} будет стоить ${costToAustralia} кредитов`,
      );
      break;
    case 'индия':
      console.log(
        `Доставка в ${inputCountry} будет стоить ${costToIndia} кредитов`,
      );
      break;
    case 'ямайка':
      console.log(
        `Доставка в ${inputCountry} будет стоить ${costToJamaica} кредитов`,
      );
      break;
    default:
      alert('В вашей стране доставка не доступна');
  }
} else {
  alert('Пользователь нажал отмену!');
}
