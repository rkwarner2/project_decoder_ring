// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope
  //this function creates a single array based on endcode/decode
  function createPolybiusArray(arr1, arr2, encode = true)
  {
    //create an array
    let arrPolybius = []

    //to encode, add the corresponding index values from each array to the new array
    //ALSO - need to manually add the i and j when reached so each of them can correspond to 42
    if (encode)
    {
      for (let i = 0; i < arr1.length; i++)
      {
        if (arr1[i] === "i/j") //when we find the i and j, add them manually
        {
          arrPolybius["i"] = 42
          arrPolybius["j"] = 42
        }
        else //all other letters just add the corresponding index.
        {
          arrPolybius[arr1[i]] = arr2[i]
        }
      }
    }
    else //for decodeing, add the index of arr2(numbers) first
    {
      for (let i = 0; i < arr2.length; i++)
      {
          arrPolybius[arr2[i]] = arr1[i]
      }
    }

    return arrPolybius
  }

  function polybius(input, encode = true)
  {
    // your solution code here

    //if no input return error message
    if (!input)
    {
      return "No input detected. Please try again."
    }
    else
    {
      //input to lowercase
      fixedInput = input.toLowerCase()

      //create array with the letters and numbers
      const arrLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i/j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
      const arrNumbers = [11, 21, 31, 41, 51, 12, 22, 32, 42, 52, 13, 23, 33, 43, 53, 14, 24, 34, 44, 54, 15, 25, 35, 45, 55]
      
      //create an output object
      let output = ""
    
      //create the polybius single array based on encode or decode
      const polybiusArray = createPolybiusArray(arrLetters, arrNumbers, encode)
    
      if (encode) // encoding
      {
        //character test to make sure only valid characters
        let isValidInput = true;
        [...fixedInput].forEach((c) => { // c stands for character
          if (!((c.charCodeAt(0) >= 97) && (c.charCodeAt(0) <= 122) || (c.charCodeAt(0) === 32)))
          {
            isValidInput = false
          }});
        
        //if there are invalid characters, return error message
        if (!isValidInput)
        {
          return "Invalid input. Please check and try again."
        }
        else
        {
          //loop through the input and add the value at the corresponding index to the output
          [...fixedInput].forEach((c) => { // c stands for character /* NYC NOT COVERED 84-91*/
            if ((c.charCodeAt(0) >= 97) && (c.charCodeAt(0) <= 122))
            {
              output += polybiusArray[c];
            }
            else //if it's not a lowercase letter add directly to output
            {
              output += c;
            }
          })
        }
      }
      else // decoding *** Also need to test for all digits and even numbers of digits in each block => 
      // split the whole thing by ' ' the loop and check length and find a math function to check for remainder
      {
        //remove all the spaces from the string
        let noSpaceInput = fixedInput.split(" ").join("");
        
        //test to make sure the all numbers string is even, else return false
        if (noSpaceInput.length % 2 !== 0)
        {
          return false; /* NYC NOT COVERED */
        }
        else
        {
          //check to see if the numbers string contains anything besides 1-5, else return error message
          let isValidInput = true;
          //check for valid input  
          [...noSpaceInput].forEach((c) => {
              switch (c)
              {
                case '1':
                case '2':
                case '3':
                case '4':
                case '5':
                  isValidInput = true;
                  break;

                default:
                  isValidInput = false;
                  break; 
              }
            })
          if (!isValidInput)
          {
            return "non standard number found. error error does not compute"
          }
          else
          { /* NYC NOT COVERED 135-155*/
            //split the string by spaces and loop through the small blocks
            let inputBlocks = fixedInput.split(" ")

            //loop through the blocks, read 2 digits and find the corresponding item in the decode array, add to output
            inputBlocks.forEach((aBlock, index) => {
              for (let i = 2, j = 0; j < aBlock.length - 1;) //didn't include an incrementor because it's in the block
              {
                output += polybiusArray[aBlock.slice(j,i)]
                i = i + 2
                j = j + 2
              }
              
              //when you get to the end of a block, add a space
              if (index !== (inputBlocks.length - 1))
              {
                output += " "
              } 
            });
          }
        }
      }
    return output
    }
  }

  return { polybius };
})();

module.exports = polybiusModule.polybius;
