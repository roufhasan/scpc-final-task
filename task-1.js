/*
* Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method.

* Example Input: "hello world" Example Output: "dlrow olleh"
*/

function revString(string) {
  let newRevString = "";
  for (let i = string.length - 1; i >= 0; i--) {
    newRevString += string[i];
  }
  return console.log(newRevString);
}

revString("hello world");
