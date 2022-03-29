const sumAll = function () {
  let finalSum = 0;
  if (Math.sign(arguments[0]) === 1 && Math.sign(arguments[1]) === 1) {
    if (Number.isInteger(arguments[0]) && Number.isInteger(arguments[1])) {
      if (arguments[1] > arguments[0]) {
        while (arguments[1] >= arguments[0]) {
          finalSum += arguments[1];
          arguments[1] -= 1;
        }
      } else
        while (arguments[0] >= arguments[1]) {
          finalSum += arguments[0];
          arguments[0] -= 1;
        }
      return finalSum;
    } else {
      return "ERROR";
    }
  } else {
    return "ERROR";
  }
};

// Do not edit below this line
module.exports = sumAll;
