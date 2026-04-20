// Add a function that will take a word and number
// repeat7loop the word how many times the number says, negative number gives a error

const repeatString = function(askWord, askNumber) {
    let newString = "";
    let repeats = 0;

    if (askNumber < 0){
        return "ERROR"
    } 
    else {
        for (repeats; repeats < askNumber; repeats++) {
            newString += askWord;
        };
        return newString;
    };
}


// let askWord = prompt("Insert your word: ")
// let askNumber = parseInt(prompt("Insert your number: "))

let askWord = "hey"
let askNumber = -1
console.log(repeatString(askWord, askNumber))

// Do not edit below this line
module.exports = repeatString;
