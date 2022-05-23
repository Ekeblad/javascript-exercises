const add = function (inputOne, inputTwo) {
  return inputOne + inputTwo;
};

const subtract = function (inputOne, inputTwo) {
  return inputOne - inputTwo;
};

const sum = function (array) {
  return array.reduce((total, current) => total + current, 0);
};

const multiply = function (array) {
  return (total = array.reduce(
    (totalSum, currentValue) => totalSum * currentValue,
    1
  ));
};

const power = function (a, b) {
  return Math.pow(a, b);
};

const factorial = function (number) {
  let result = number;
  if (number === 0 || number === 1) {
    return 1;
  } else {
    while (number > 1) {
      number--;
      result *= number;
    }
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
