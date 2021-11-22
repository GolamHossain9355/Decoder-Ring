const expect = require("chai").expect
const { substitution } = require("../src/substitution.js")

describe("substitution", () => {
    describe("error handling", () => {
        it("should return false if alphabet is more than 26", () => {
            const input = "Hello"
            const alphabet = "$wae&zrdxtfcygvuhbijnokmpl#"
            const actual = substitution(input, alphabet)
            expect(actual).to.be.false
        })
        it("should return false if no alphabet is given", () => {
            const input = "Hello"
            const actual = substitution(input)
            expect(actual).to.be.false
        })
        it("should return false if all of the alphabets are not unique", () => {
            const input = "Hello"
            const alphabet = "abcabcabcabcabcabcabcabcyz"
            const actual = substitution(input, alphabet)
            expect(actual).to.be.false
        })
    })
    describe("encoding messages", () => {
        it("should return an encoded messege", () => {
            const input = "this is it"
            const alphabet = "plmoknijbuhvygctfxrdzeswaq"
            const actual = substitution(input, alphabet)
            const expected = "djbr br bd"
            expect(actual).to.equal(expected)
        })
        it("should return an encoded messege with special charecters when given", () => {
            const input = "this is it"
            const alphabet = "plmokn#jbuhv$gctfxr.zeswaq"
            const actual = substitution(input, alphabet)
            const expected = ".jbr br b."
            expect(actual).to.equal(expected)
        })
    })
    describe("decoding messages", () => {
        it("should return a decoded messege", () => {
            const input = "djbr br bd"
            const alphabet = "plmoknijbuhvygctfxrdzeswaq"
            const actual = substitution(input, alphabet, false)
            const expected = "this is it"
            expect(actual).to.equal(expected)
        })
        it("should return a decoded messege with special charecters", () => {
            const input = "d!br br bd"
            const alphabet = "pl@okni!bu&vy+ctf*rdzes(aq"
            const actual = substitution(input, alphabet, false)
            const expected = "this is it"
            expect(actual).to.equal(expected)
        })
    })
})
