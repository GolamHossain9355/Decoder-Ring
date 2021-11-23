// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  function substitution(input, alphabet, encode = true) {
    //error handling
    if (!alphabet || alphabet.length !== 26 || new Set(alphabet).size !== 26) return false;
    //initial data 
    const allAlphabets = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
    //split input into an array
    let splitted = input.toLowerCase().split("");
    //looped through inputted array
    return splitted
      .map((letter) => {
        if (letter == " ") return letter
        //returning encoded letters by finding the index of it from alphabet 
        if (encode) return alphabet[allAlphabets.indexOf(letter)]
        //returning the decoded message with vise versa 
        if (!encode) return allAlphabets[alphabet.indexOf(letter)]
      })
      .join("");
  }
  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
