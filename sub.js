function isStringUnique(str) {
  for (let i = 0; i < str.length - 1; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (str[i] === str[j]) {
        return false;
      }
    }
  }
  return true;
}

function substitution(input, alphabet, encode = true)
{
  // your solution code here

  const alphabetDefault = "abcdefghijklmnopqrstuvwxyz";

  if (!input || !alphabet)
  {
    return false
  }
  else
  {
  //test the length of the alphabet for 26 and make sure all characters are unique
    if (alphabet.length != 26 || (isStringUnique(alphabet))) {
      return false;
    }
    else
    {
      //input to lower to igorne capitals
      fixedInput = input.toLowerCase();
      let output = "";
      //this code checks default alphabet and find the corresponding index in the sub alphabet
      [...fixedInput].forEach((c) => {
        // c stands for character
        if (c !== " ")
        {
          if (encode) {
            //console.log("fixed at i: " + (fixedInput[i]))
            pos = alphabetDefault.indexOf(c);

            //console.log("This is pos: " + pos)
            output += alphabet[pos];
          } //decode
          else
          {
            //console.log("fixed at i: " + (fixedInput[i]))
            pos = alphabet.indexOf(c);

            //console.log("This is pos: " + pos)
            output += alphabetDefault[pos];
          }
        }
        else
        {
          output += c;
        }
      });
      return output;
    }
  }
}


let uniResult = isStringUnique("abcdefghijklmnopqrstuvwxyz")

console.log(uniResult)