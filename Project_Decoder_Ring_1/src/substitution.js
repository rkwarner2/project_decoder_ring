// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  //this function checks to see if the input string is all unique characters
  function isStringUnique(str)
  {
    for (let i = 0; i < str.length - 1; i++) {
      for (let j = i + 1; j < str.length; j++) {
        if (str[i] === str[j]) {
          return false; /* NYC NOT COVERED */
        }
      }
    }
    return true;
  }

  function substitution(input, alphabet, encode = true)
  {
    // your solution code here
  
    //create a default alphabet
    const alphabetDefault = "abcdefghijklmnopqrstuvwxyz";
    
    //if the input or alphabet doesn't exist, return false
    if (!input || !alphabet)
    {
      return false
    }
    else
    {
      //test the length of the alphabet for 26 and make sure all characters are unique
      if (alphabet.length !== 26)
      {
        return false; /* NYC NOT COVERED */
      }
      else if (!isStringUnique(alphabet))
      {
        return false;
      }
      else
      {
        //input to lower to igorne capitals
        fixedInput = input.toLowerCase();

        //create an output object
        let output = "";

        //this code checks default alphabet and find the corresponding index in the sub alphabet
        [...fixedInput].forEach((c) => { // c stands for character
          if (c !== " ")
          {
            if (encode) //for encoding a message
            {
              //get the index of the letter in the default alphabet
              pos = alphabetDefault.indexOf(c);

              output += alphabet[pos];
            } 
            else //for decoding 
            {
              //get the index of the letter in the substitution alphabet
              pos = alphabet.indexOf(c);

              //use the index to get the corresponding letter in the default alphabet
              output += alphabetDefault[pos];
            }
          }
          else // if c is a space
          {
            output += c;
          }
        });
        return output; 
      }
    }
  }

  return { substitution, isStringUnique };
})();

module.exports = substitutionModule.substitution
