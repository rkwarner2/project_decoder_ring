// Write your tests here!
const { expect } = require("chai");
const caesar = require("../src/caesar")

//describe caesar function
describe("caesar()", () => {
    //test: should return false if no shift is given
    it("should return false if no shift is given", () => {
        const actual = caesar("thinkful")
        const expected = false
        expect(actual).to.be.equal(expected)
    })

    //test: should return false if shift is greater than 25
    it("should return false if shift is greater than 25", () => {
        const actual = caesar("thinkful", -50)
        const expected = false
        expect(actual).to.be.equal(expected)
    })
    
    //test: should return false if shift is less than -25
    it("should return false if shift is less than -25", () => {
        const actual = caesar("thinkful", -50)
        const expected = false
        expect(actual).to.be.equal(expected)
    })
    
    //test: call with ('thinkful', 3) and return wklqnixo
    it("should return 'wklqnixo' when called with arguments ('thinkful', 3)", () => {
        const actual = caesar("thinkful", 3)
        const expected = "wklqnixo"
        expect(actual).to.be.equal(expected)

    })
    
    //test: call with ('wklqnixo', 3, false) and return thinkful
    it("should return 'thinkful' when called with arguments 'wklqnixo', 3, false", () => {
        const actual = caesar("wklqnixo", 3, false)
        const expected = "thinkful"
        expect(actual).to.be.equal(expected)

    })
    
    //test: call with ('This is a secret message!', 8) and return 'bpqa qa i amkzmb umaaiom!' 
    it("should return 'bpqa qa i amkzmb umaaiom!' when called with arguments 'This is a secret message!', 8", () => {
        const actual = caesar("This is a secret message!", 8)
        const expected = "bpqa qa i amkzmb umaaiom!"
        expect(actual).to.be.equal(expected)
    })
    
    //test: call with ('BPQA qa I amkzmb umaaiom!', 8, false) and return 'this is a secret message!'
    it("should return 'this is a secret message!' when called with arguments 'BPQA qa I amkzmb umaaiom!', 8, false", () => {
        const actual = caesar("BPQA qa I amkzmb umaaiom!", 8, false)
        const expected = "this is a secret message!"
        expect(actual).to.be.equal(expected)
    })

})