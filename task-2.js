/* 
* Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array. 

* Example Input: [2, -5, 10, -3, 7] Example Output: 19

*/

const arr = [2, -5, 10, -3, 7];

const sumOfPosNumb = arr
  .filter((posN) => posN >= 0)
  .reduce((prev, curr) => prev + curr, 0);

console.log(sumOfPosNumb);
