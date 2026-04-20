// [1, 2, 3, 4], 3

const removeFromArray = function(list, ...arg) {
    let newList = []
    for (let eachNumber = 0; eachNumber < list.length; eachNumber++){
        if (arg.includes(list[eachNumber])){
            continue
        }
    else {
        newList.push(list[eachNumber])
    }}
    return newList

};

console.log(removeFromArray([1,2, 2, 3, 4], 2, 3))

// Do not edit below this line
module.exports = removeFromArray;
