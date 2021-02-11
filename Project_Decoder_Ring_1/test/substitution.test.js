// Write your tests here!
// Write your tests here!
const { expect } = require("chai");
const substitution = require("../src/substitution")
const isStringUnique = require("../src/substitution")

describe("substitution()", () => {
    //substitution("thinkful", "short"); //> false
    it("rk_should return false if alphabet is not 26 characters", () => {
        const actual = substitution("thinkful")
        const expected = false
        expect(actual).to.be.equal(expected)
    })

    //substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev"); //> 'jrufscpw'
    it("rk_should return 'jrufscpw' when called with 'thinkful', 'xoyqmcgrukswaflnthdjpzibev'", () => {
        const actual = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev")
        const expected = "jrufscpw"
        expect(actual).to.be.equal(expected)
    })

    //substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev"); //> 'elp xhm xf mbymwwmfj dne'
    it("rk_should return 'elp xhm xf mbymwwmfj dne' when called with 'You are an excellent spy', 'xoyqmcgrukswaflnthdjpzibev", () => {
        const actual = substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev")
        const expected = "elp xhm xf mbymwwmfj dne"
        expect(actual).to.be.equal(expected)
    })

    //substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false); //> 'thinkful'
    it("rk_should return 'thinkful' when called with 'jrufscpw', 'xoyqmcgrukswaflnthdjpzibev', false", () => {
        const actual = substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false)
        const expected = "thinkful"
        expect(actual).to.be.equal(expected)
    })

    //substitution("message", "$wae&zrdxtfcygvuhbijnokmpl"); //> "y&ii$r&"
    it("rk_should return 'y&ii$r&' when called with 'message', '$wae&zrdxtfcygvuhbijnokmpl", () => {
        const actual = substitution("message", "$wae&zrdxtfcygvuhbijnokmpl")
        const expected = "y&ii$r&"
        expect(actual).to.be.equal(expected)
    })
    
    //substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false); //> "message"
    it("rk_should return 'message' when called with 'y&ii$r&', '$wae&zrdxtfcygvuhbijnokmpl', false", () => {
        const actual = substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false)
        const expected = "message"
        expect(actual).to.be.equal(expected)
    })
})

//tesitng the isStringUnique function
describe("isStringUnique()", () => {
    it("should return false if the string is not valid", () => {
        const actual = isStringUnique("abcabcabcabcabcabcabcabcyz")
        const expected = false
        expect(actual).to.be.equal(expected)
    })
})


//xoyqmcgrukswaflnthdjpzibev