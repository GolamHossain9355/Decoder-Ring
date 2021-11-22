// Write your tests here!
const { caesar } = require("../src/caesar.js");
const expect = require("chai").expect;

describe("caesar()", () => {
  describe("error handling", () => {
    it("should return false if shift value is not present", () => {
      let shift = null;
      let msg = "my name is rabby";
      let actual = caesar(msg, shift);
      expect(actual).to.be.false;
    });
    it("should return false if shift value is above 25", () => {
      let shift = 35;
      let msg = "my name is rabby";
      let actual = caesar(msg, shift);
      expect(actual).to.be.false;
    });
    it("should return false if shift value is below -25", () => {
      const shift = -35;
      const msg = "my name is rabby";
      const actual = caesar(msg, shift);
      expect(actual).to.be.false;
    });
    it("should return false if shift value is 0", () => {
      const shift = 0;
      const msg = "my name is rabby";
      const actual = caesar(msg, shift);
      expect(actual).to.be.false;
    });
  });
  describe("encoding a message", () => {
    it("should return an encoded message with a positive shift value", () => {
      const shift = 1;
      const msg = "za kl.";
      const actual = caesar(msg, shift, true);
      const expected = "ab lm."
      expect(actual).to.equal(expected)
    });
    it("should return an encoded message with a negative shift value", () => {
      const shift = -1;
      const msg = "za yb.";
      const actual = caesar(msg, shift, true);
      const expected = "yz xa."
      expect(actual).to.equal(expected)
    });
  });
  describe("decoding a message", () => {
    it("should return a decoded message with negative shift value", () => {
      const shift = -1;
      const msg = "za kl.";
      const actual = caesar(msg, shift, false);
      const expected = "ab lm."
      expect(actual).to.equal(expected)
    });
    it("should return a decoded message with a positive shift value", () => {
      const shift = 1;
      const msg = "za yb.";
      const actual = caesar(msg, shift, false);
      const expected = "yz xa."
      expect(actual).to.equal(expected)
    });
  });
});
