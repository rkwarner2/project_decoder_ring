// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6
  function createPolybiusArray(arr1, arr2, encode = true) //this function creates a single array based on endcode/decode
  {
    let arrPolybius = []
    if (encode)
    {
      for (let i = 0; i < arr1.length; i++)
      {
        if (arr1[i] === "i/j")
        {
          arrPolybius["i"] = 42
          arrPolybius["j"] = 42
          //i++
        }
        else
        {
          arrPolybius[arr1[i]] = arr2[i]
        }
          
      }
    }
    else
    {
      for (let i = 0; i < arr2.length; i++)
      {
          arrPolybius[arr2[i]] = arr1[i]
      }
    }
    //console.log(arrPolybius)
    return arrPolybius
  }

  function polybius(input, encode = true)
  {
    // your solution code here
    if (!input)
    {
      return "No input detected. Please try again."
    }
    else
    {
      fixedInput = input.toLowerCase()
      //create array with the letters and numbers
      const arrLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i/j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
      const arrNumbers = [11, 21, 31, 41, 51, 12, 22, 32, 42, 52, 13, 23, 33, 43, 53, 14, 24, 34, 44, 54, 15, 25, 35, 45, 55]
      
      //create an output object
      let output = ""
    
      //create the polybius single array based on encode or decode
      const polybiusArray = createPolybiusArray(arrLetters, arrNumbers, encode)
    
      //console.log("This is polybius: " + polybiusArray)
    
      if (encode) // encoding
      {
        //character test
        let isValidInput = true;
        [...fixedInput].forEach((c) => { // c stands for character
          if (!((c.charCodeAt(0) >= 97) && (c.charCodeAt(0) <= 122) || (c.charCodeAt(0) === 32)))
          {
            isValidInput = false
          }});
        if (!isValidInput)
        {
          return "Invalid input. Please check and try again."
        }
        else
        {
          [...fixedInput].forEach((c) => { // c stands for character
            if ((c.charCodeAt(0) >= 97) && (c.charCodeAt(0) <= 122))
            {
              output += polybiusArray[c]
            }
            else
            {
              output += c
            }
          })
        }
      }
      else // decoding *** Also need to test for all digits and even numbers of digits in each block => 
      // split the whole thing by ' ' the loop and check length and find a math function to check for remainder
      {
        let strCount = (fixedInput.split(" ").join("")).length
        
        if (strCount % 2 !== 0)
        {
          return false
        }
        else
        {
          let inputChunks = fixedInput.split(" ")
    
          inputChunks.forEach((inputChunk, index) => {
          for (let i = 2, j = 0; j < inputChunk.length - 1;) //didn't include an incrementor because it's in the block
          {
              output += polybiusArray[inputChunk.slice(j,i)]
              i = i + 2
              j = j + 2
          }
          if (index !== (inputChunks.length - 1))
          {
            output += " "
          } 
          });

        }
        //return output 
      }
    //return a string with the message
    return output
    }
  }


  console.log(polybius("thinkful"))

