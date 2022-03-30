const ftoc = function (farenheightIn) {
  let celciusOut = ((farenheightIn - 32) * 5) / 9;
  return (celciusOut = Math.round(celciusOut * 10) / 10);
};

const ctof = function (celciusIn) {
  let farenheightOut = celciusIn * (9 / 5) + 32;
  return (farenheightOut = Math.round(farenheightOut * 10) / 10);
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof,
};
