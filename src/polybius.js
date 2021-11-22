// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  let alphabets =   ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
  let alphabetValues =['11','21','31','41','51','12','22','32','42','42','52','13','23','33','43','53','14','24','34','44','54','15','25','35','45','55']
  function polybius(input, encode = true) {
    if (!encode && input.split(" ").join("").length % 2 == 1) return false;
    let splitted = input.toLowerCase().split("");
    let decoderVal = "";
    return splitted
      .map((letter) => {
        if (letter === " ") return letter;
        if (decoderVal.length == 2) decoderVal = "";
        if (encode) return alphabetValues[alphabets.indexOf(letter)];
        decoderVal += letter;
        if (decoderVal.length == 2) {
          if (alphabetValues.indexOf(decoderVal) == 8) return "(i/j)";
          return alphabets[alphabetValues.indexOf(decoderVal)];
        }
      })
      .join("");
  }
  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
