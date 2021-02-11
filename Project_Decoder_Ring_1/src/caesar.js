// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true)
  {
    // your solution code here

    //if no input and no shift, return false
    if (!input || !shift)
    {
      return false
    } //check shift value, return false is not valid
    else if ((shift === 0) || (shift > 25) || (shift < -25))
    {
      return false
    }
    else
    {
      //caeser code here
      //create the default alphabet? can we do this?
      const alphabetDefault = "abcdefghijklmnopqrstuvwxyz"

      //if we are encoding, then the shift value needs to be the opposite before creating the shifted alphabet
      if (encode === false)
      {
        shift = shift * -1
      }

      //create the shifted alphabet
      let alphabetShifted = ""
      alphabetShifted += alphabetDefault.slice(shift, alphabetDefault.length)
      alphabetShifted += alphabetDefault.slice(0, alphabetDefault.indexOf(alphabetShifted[0]))
      
      //input to lower to igorne capitals
      fixedInput = input.toLowerCase()

      // creat an output object
      let output = ""

      //loop through message and find the matching letting in the shifted alphabet, add to output.
      for (let i = 0; i < fixedInput.length; i++)
      {
        //check the charCodes of each letter to make sure it a lower case or space | otherwise add directly to output
        if ((fixedInput[i].charCodeAt(0) === 32) || (fixedInput[i].charCodeAt(0) < 97) || (fixedInput[i].charCodeAt(0) > 122))
        {
          output += fixedInput[i]
        }
        else
        {
          //the index of the char in the default array
          pos = alphabetDefault.indexOf(fixedInput[i])

          //add the corresponding index letter from the shifted alphabet
          output += alphabetShifted[pos]
          //console.log(output)
        }
      }
      return output
    }
  }
  return { caesar };
})();

module.exports = caesarModule.caesar;
