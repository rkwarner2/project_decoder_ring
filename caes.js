const alphabetDefault = "abcdefghijklmnopqrstuvwxyz" // shift to 3 =>
let alphabetShifted = ""
let input = "Thinkful Thinkful"
let shift = 3

function caesar(input, shift, encode = true)
{
  if (!input || !shift)
  {
    return false
  }
  else if ((shift === 0) || (shift > 25) || (shift < -25))
  {
    return false
  }
  else
  {
    //caeser code here
    // create the shifted alphabet? can we do this?
    const alphabetDefault = "abcdefghijklmnopqrstuvwxyz" // shift to 3 =>
    let alphabetShifted = ""

    //if we are decoding, get the opposite of the shift
    if (encode === false)
    {
      shift = -Math.abs(shift)
    }

    alphabetShifted += alphabetDefault.slice(shift, alphabetDefault.length)
    alphabetShifted += alphabetDefault.slice(0, alphabetDefault.indexOf(alphabetShifted[0]))
    
    //input to lower to igorne capitals
    fixedInput = input.toLowerCase()

    // creat an output object
    let output = ""

    //loop through message and find the matching letting in the shifted alphabet, add to output.
    for (let i = 0; i < fixedInput.length; i++)
    {
      if ((fixedInput[i].charCodeAt(0) === 32) || (fixedInput[i].charCodeAt(0) < 97) || (fixedInput[i].charCodeAt(0) > 122))
      {
        output += fixedInput[i]
      }
      else
      {
        //console.log("fixed at i: " + (fixedInput[i]))
        pos = alphabetDefault.indexOf(fixedInput[i])

        //console.log("This is pos: " + pos)
        output += alphabetShifted[pos]
        //console.log(output)
      }
    }
    return output
  }

}
console.log(caesar("This is a secret message!", 8))
