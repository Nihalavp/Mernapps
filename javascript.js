let inputString = "ab-cd-ef";
let outputString = "";

for (let i = 0; i < inputString.length; i++) {
    outputString += inputString[i];
    if (inputString[i] !== '-' && inputString[i + 1] !== '-') {
        outputString += '-';
    }
}

console.log(outputString); // Output: ab--cd--ef
