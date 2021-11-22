// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  function caesar(input, shift, encode = true) {
    //error handling
    if (!shift || shift === 0 || shift > 25 || shift < -25) return false;
    let ShiftVal = encode ? shift : shift * -1;
    let splitted = input.toLowerCase().split("");
    //using map to change the letters to ascii numbers then shift then back to letters
    let shifted = splitted.map((letter) => {
      //shifter to numbers
      let num = letter.charCodeAt();
      //shift the numbers between 97 and 122 to match the specifications
      if (num <= 122 && num >= 97) {
        let newNum = num + ShiftVal;
        if (newNum > 122) return String.fromCharCode(96 + (newNum - 122));
        if (newNum < 97) return String.fromCharCode(123 - (97 - newNum));
        return String.fromCharCode(newNum);
      }
      //changing the numbers that are not letters as is
      return String.fromCharCode(num);
    });
    //join the array and return
    return shifted.join("");
  }
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
