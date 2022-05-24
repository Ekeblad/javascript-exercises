const palindromes = function (string) {
  string = string.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  const reverseString = string.split("").reverse().join("");
  if (reverseString === string) {
    return true;
  }
  return false;
};

// Do not edit below this line
module.exports = palindromes;
