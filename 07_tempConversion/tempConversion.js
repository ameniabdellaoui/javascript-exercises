const ftoc = function (temperaturef) {
  return Math.round((temperaturef - 32) * 5 / 9 * 10) / 10;

};

const ctof = function (temperaturec) {
  return Math.round((temperaturec * 9 / 5 + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
console.log(ftoc(32));
