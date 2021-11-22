// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  function substitution(input, alphabet, encode = true) {
    if (!alphabet || alphabet.length !== 26) return false
    let uniqueCheck = alphabet.split("").every(letter => alphabet.indexOf(letter) === alphabet.lastIndexOf(letter))
    if (!uniqueCheck) return false
    const alphabetValue = {
      a: alphabet[0], b: alphabet[1], c: alphabet[2], d: alphabet[3], e: alphabet[4],
      f: alphabet[5], g: alphabet[6], h: alphabet[7], i: alphabet[8], j: alphabet[9],
      k: alphabet[10], l: alphabet[11], m: alphabet[12], n: alphabet[13], o: alphabet[14],
      p: alphabet[15], q: alphabet[16], r: alphabet[17], s: alphabet[18], t: alphabet[19],
      u: alphabet[20], v: alphabet[21], w: alphabet[22], x: alphabet[23], y: alphabet[24],
      z: alphabet[25]
    }
    let splitted = input.toLowerCase().split("") 
    return splitted.map(letter => {
      for (let key in alphabetValue) {
        let substituteLetter = alphabetValue[key]
        if (encode) {
          if(letter.charCodeAt() > 122 || letter.charCodeAt() < 97) return letter
          if (letter == key) return substituteLetter
        } else {
          if (letter == " ") return letter
          if (letter == substituteLetter) return key
        }
      }
    })
    .join("")
  }
  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
