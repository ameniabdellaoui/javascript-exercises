const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {




  return a - b;
};

const sum = function (myarray) {
  let sum = 0;
  for (let i = 0; i < myarray.length; i++) {
    sum += myarray[i];
  }
  return sum;

};

const multiply = function (myarray) {
  let multResult = 1;
  for (let i = 0; i < myarray.length; i++) {
    multResult *= myarray[i];
  }
  return multResult;
};

const power = function (a, b) {
  let powerResult = 1;
  for (let i = 1; i <= b; i++) {

    powerResult *= a;

  }
  return powerResult;
};

const factorial = function (a) {

  let factResult = 1;
  if (a === 0 || a === 1) return 1;
  else {
    for (let i = 2; i <= a; i++) {

      factResult *= i;

    }
    return factResult;
  }

};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
