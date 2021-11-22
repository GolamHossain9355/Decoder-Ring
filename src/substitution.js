// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  function substitution(input, alphabet, encode = true) {
    if (!alphabet || alphabet.length !== 26 || new Set(alphabet).size !== 26) return false;
    const allAlphabets = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
    const alphabetValue = {};
    allAlphabets.forEach((letter) => {
      alphabetValue[letter] = alphabet[allAlphabets.indexOf(letter)];
    });
    let splitted = input.toLowerCase().split("");
    return splitted
      .map((letter) => {
        if (letter === " ") return letter;
        for (let key in alphabetValue) {
          let substituteLetter = alphabetValue[key];
          if (encode) {
            if (letter === key) return substituteLetter;
          } else {
            if (letter === substituteLetter) return key;
          }
        }
      })
      .join("");
  }
  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
