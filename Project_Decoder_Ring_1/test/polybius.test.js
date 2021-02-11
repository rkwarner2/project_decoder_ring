// Write your tests here!
const { expect } = require("chai");
const polybius = require("../src/polybius")


describe("polybius()", () => {
    
    describe("general", () => {
        
        //test: no input given
        it("rk_should error message if no input is given", () => {
            const actual = polybius()
            const expected = "No input detected. Please try again."
            expect(actual).to.be.equal(expected)
        })
    })

    describe("encoding", () => {
        //test: input contains only letters and numbers
        it("rk_should return error message if input contains something other than letters or spaces" , () => {
            const actual = polybius("thinkful!")
            const expected = "Invalid input. Please check and try again."
            expect(actual).to.be.equal(expected)
        })
    })

    describe("decoding", () => {
        //test if there are any numbers besides 1-5
        it("rk_should return error message if input contains a number other than 1-5" , () => {
            const actual = polybius("4432423352125416", false)
            const expected = "non standard number found. error error does not compute"
            expect(actual).to.be.equal(expected)
        })

    })

})