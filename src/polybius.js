// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  let objects = {
    a: 11, b: 21, c: 31, d: 41, e: 51,
    f: 12, g: 22, h: 32, i: 42, j: 42,
    k: 52, l: 13, m: 23, n: 33, o: 43,
    p: 53, q: 14, r: 24, s: 34, t: 44,
    u: 54, v: 15, w: 25, x: 35, y: 45,
    z: 55
  };
  function correctSplit(input, encode = true) {
    if (encode) return input.toLowerCase().split("");
    if (!encode) return input.toLowerCase().split(" ");
  }
  function polybius(input, encode = true) {
    let splitted = correctSplit(input, encode);
    if (encode) {
      return splitted
        .map((letter) => {
          if (letter === " ") return letter;
          for (let key in objects) {
            let numVal = objects[key];
            if (letter === key) return numVal;
          }
        })
        .join("");
    } else {
      if (splitted.join("").length % 2 == 1) return false;
      return splitted
        .map((word) => {
          let dualNumArray = word.match(/.{1,2}/g);
          let hmm = [];
          dualNumArray.forEach((num) => {
            for (let key in objects) {
              if (num == objects[key]) {
                if (objects[key] == 42) {
                  return hmm.push("(i/j)");
                } else {
                  hmm.push(key);
                }
              }
            }
          });
          return hmm.join("");
        })
        .join(" ");
    }
  }
  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
