const fibonacci = function (number) {
  if (number < 0) return "OOPS";
  if (number === 0) return 0;
  let first = 0;
  let second = 1;
  for (let i = 1; i < number; i++) {
    const temp = second;
    second = first + second;
    first = temp;
  }
  return second;
};

// Do not edit below this line
module.exports = fibonacci;
