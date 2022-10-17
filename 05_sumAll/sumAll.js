const sumAll = function (a, b) {
    let sum = 0;
    if (a < 0 || b < 0 || typeof arguments[0] === "string" || typeof arguments[1] !== "number") {
        return 'ERROR';
    }
    else if (a < b) {
        for (let i = a; i <= b; i++)
            sum += i;
    }

    else if (a > b) {
        for (let i = b; i <= a; i++)
            sum += i;
    }

    console.log(sum);
    return sum;





};
sumAll(10, [90, 1]);


// Do not edit below this line
module.exports = sumAll;
