const leapYears = function(year) {
    if (Number.isInteger(year / 4) && !Number.isInteger(year / 100)){
        return true
        // return `${year} is leap year!`
    }
    else if (Number.isInteger(year /100) && Number.isInteger(year / 400)){
        return true
        // return `${year} is leap year!`
    }
    else {
        return false
        // return `${year} is not leap year!`
    }
};

// Do not edit below this line
module.exports = leapYears;
