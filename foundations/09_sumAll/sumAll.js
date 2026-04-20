const sumAll = function(...arg) {
    let list = arg.slice().sort()
    let summed = 0
    

    for (let repeat = list[0]; repeat <= list.at(-1); repeat++){
        if (repeat < 0 || repeat % 1 !== 0 || !Number.isInteger(repeat)){
            return "ERROR";
        }
        else {
        summed += repeat;
    }};
    return summed;
};

console.log(sumAll(10, "90"))




// Do not edit below this line
module.exports = sumAll;
