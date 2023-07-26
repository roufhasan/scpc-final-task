/*
 * Implement a function that converts a Roman numeral to an integer. The function should take a Roman numeral string (e.g., "IX" or "XXI") as input and return the corresponding integer value.
 */

function convert(roman) {
  const romanStr = roman.toUpperCase();
  let integ = 0;
  let romanValue = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  for (let i = 0; i < romanStr.length; i++) {
    if (romanValue[romanStr[i]] < romanValue[romanStr[i + 1]]) {
      integ -= romanValue[romanStr[i]];
    } else {
      integ += romanValue[romanStr[i]];
    }
  }
  return integ;
}

console.log(convert("xii"));
