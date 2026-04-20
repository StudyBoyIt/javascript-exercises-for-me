const reverseString = function(word) {
    let stringBox = [];
    let reverseString = "";

    // Butting each letter in a list
    for (let eachLetter = 0; eachLetter < word.length; eachLetter++) {
        stringBox.push(word[eachLetter])
    };
    stringBox = stringBox.reverse();
    
    // taking each letter out of the reversed list
    for (let eachLetter = 0; eachLetter < word.length; eachLetter++) {
        reverseString += stringBox[eachLetter]
    };
    return reverseString;
};

// Do not edit below this line
module.exports = reverseString;
