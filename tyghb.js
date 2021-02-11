const alphabetDefault = "abcdefghijklmnopqrstuvwxyz !@@" // shift to 3 =>
let alphabetShifted = ""
let shift = -3

alphabetShifted += alphabetDefault.slice(shift, alphabetDefault.length)
alphabetShifted += alphabetDefault.slice(0, alphabetDefault.indexOf(alphabetShifted[0]))
console.log(alphabetShifted)

for (let i = 0; i < alphabetDefault.length; i++)
{
    console.log(alphabetDefault.charCodeAt(i))

}
