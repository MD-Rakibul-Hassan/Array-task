/* Task 1
Write a JavaScript code to reverse the array colors without using the reverse method.

Input: const colors = ['red', 'blue', 'green', 'yellow', 'orange']

Output:

['orange', 'yellow', 'green', 'blue', 'red']
*/
// Answer to the first task //
// This is the main array 
const colors = ['red', 'blue', 'green', 'yellow', 'orange'];
// This is the function that reverse the main array without change main array 
function reverseingColors (array) {
      // There is define a variable which is  reversedColor that hold the reversedColor array 
      // There is use spared operater to copy the main array and simply called the built-in function reverse()
      const reversedColor = [...array].reverse();
      // There is return the new reversedColor array 
      return reversedColor;
}
const reversedColor = reverseingColors(colors);
console.log(reversedColor)
/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
/*Task 2
Write a JavaScript code to get the even numbers from an array using any looping technique.

Input: const numbers = [12, 98, 5, 41, 23, 78, 46];

Output:

[12, 98, 78, 46]
*/
// Answer to the second task 
// The main numbers array 
const numbers = [12, 98, 5, 41, 23, 78, 46];
// The even number finding function 
function findEvenNumber (number) {
      // the is define a empty array becouse when the element of main array that pass the condition we can push the value and returning the new array 
      const evenNumber = [];
      for (number of number) {
            if (number % 2 === 0) {
                  evenNumber.push(number);
            }
      }
      return evenNumber;
}
const evenNumber = findEvenNumber(numbers);
console.log(evenNumber)
/* Task 3
Use a for...of loop to concatenate all the elements of an array into a single string.

Input: var numbers = ['Tom', 'Tim', 'Tin', 'Tik']

Output:

'TomTimTinTik' */
// Answer to the third task 
// The main Array 
const  string = ['Tom', 'Tim', 'Tin', 'Tik'];
// The concatinatingStirng function 
function concatinatingStirng (str) {
      let joinString = "'";
      for (item of str) {
            joinString = joinString.concat(item);
      }
      let newJoinStiring = joinString.concat("'")
      return newJoinStiring
}
let joinString = concatinatingStirng(string);
console.log(joinString);
/*
Task 4 (Hard)
Reverse the words of a sentence. Only the position of the word will be reversed. check out the output

Input: const statement = 'I am a hard working person'

Output:

'person working hard a am I'
*/
// Answer to the task 4
const statement = 'I am a hard working person';
function reversedStatement (str) {
      const stringArray = str.split(" ");
      console.log(stringArray);
      const reversedStringArray = stringArray.reverse().join(" ");
      const reversedString = "'".concat(reversedStringArray,"'")
      return reversedString;
}
const reversedString = reversedStatement(statement);
console.log(reversedString);