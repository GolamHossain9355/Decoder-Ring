// Write your tests here!
const expect = require("chai").expect
const { polybius }= require("../src/polybius")

describe("polybius()", () => {
    describe("encoding messeges", () => {
        it("should encode a messege to numbers", () => {
            const msg = "hello"
            const expected = "3251131343"
            const actual = polybius(msg)
            expect(actual).to.equal(expected)
        })
        it("should encode a both letters i and j to number 42", () => {
            const msg = "hijab"
            const expected = "3242421121"
            const actual = polybius(msg)
            expect(actual).to.equal(expected)
        })
        it("should keep the spaces when encoding", () => {
            const msg = "Golam Hossain"
            const expected = "2243131123 32433434114233"
            const actual = polybius(msg, true)
            expect(actual).to.equal(expected)
        })
    })
    describe("decoding messeges", () => {
        it("should decode a messege from numbers to letters", () => {
            const msg = "3251131343"
            const expected = "hello"
            const actual = polybius(msg, false)
            expect(actual).to.equal(expected)
        })
        it("should decode a messege with number 42 to (i/j)", () => {
            const msg = "3242421121"
            const expected = "h(i/j)(i/j)ab"
            const actual = polybius(msg, false)
            expect(actual).to.equal(expected)
        })
        it("should return false if the length of inputted numbers are odd)", () => {
            const msg = "32424211210"
            const expected = false
            const actual = polybius(msg, false)
            expect(actual).to.equal(expected)
        })
        it("should leave spaces as is when decoding)", () => {
            const msg = "2243131123 32433434114233"
            const expected = "golam hossa(i/j)n"
            const actual = polybius(msg, false)
            expect(actual).to.equal(expected)
        })
    })
})