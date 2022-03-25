const repeatString = function (str, num) {
  if (num >= 0) {
    let returnString = "";
    for (let i = 0; i < num; i++) {
      returnString += str;
    }
    return returnString;
  } else {
    return (returnString = "ERROR");
  }
};

repeatString("hey", 3);

// Do not edit below this line
module.exports = repeatString;
