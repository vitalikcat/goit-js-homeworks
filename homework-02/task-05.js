const checkForSpam = function (string) {
  const words = string.split(/\b/);

  for (let i = 0; i < words.length; i += 1) {
    const word = words[i].toLowerCase();

    if (word === 'spam' || word === 'sale') {
      return true;
    }
  }
  return false;
};

console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
