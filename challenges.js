/** Challenges */

import { stack } from "../../../jobly/jobly-backend/app";

/** Browser Back/Forward
 *
 * using two stacks.
 */

const stackBack = []; // Stack to store the back history
const stackForward = []; // Stack to store the forward history

function visitSite(url) {
  //When a new site is visited, push into the back stack and clear the forward stack
  stackBack.push(url);
  stackForward.length = 0;
}

function goBack() {
  if (stackBack.length > 0) {
    const currentPage = stackBack.pop();
    stackForward.push(currentPage);
  }
}

function goForward() {
  if (stackForward.length > 0) {
    const currentPage = stackForward.pop();
    stackBack.push(currentPage);
  }
}

/** String Reversal
 *
 * without arrays.
 */

function reverseString(inputString) {
  let reveresedString = "";
  for (let i = 0; i < inputString.length; i++) {
    reveresedString = inputString[i] + reverseString;
  }
  return reveresedString;
}

/** Balanced Brackets */

function isBalanced(string) {
  const stack = [];
  const openBrackets = "({[";
  const closeBrackets = ")}]";

  for (let char of string) {
    if (openBrackets.includes(char)) {
      stack.push(char);
    } else if (closeBrackets.includes(char)) {
      if (stack.length === 0) {
        return false; //Unmatched close bracket
      }
      const top = stack.pop();
      if (openBrackets.indexOf(top) !== closeBrackets.indexOf(char)) {
        return false; //Mismatched brackets
      }
    }
  }
  return stack.length === 0; //Check for unmatched open brackets.
}

// Example usage:
console.log(isBalanced("((hello) [world])")); // true
console.log(isBalanced("({[)]}")); // false

/** Josephus Survivor */

function findSurvivor(numPeople, skip) {
  if (numPeople === 1) {
    return 1;
  }
  return ((findSurvivor(numPeople - 1, skip) + skip - 1) % numPeople) + 1;
}

// Example usage:
console.log(findSurvivor(10, 3)); // 4

/** Polish Notation Calculator */
function calc(expression) {
  const tokens = expression.split(" ");
  const stack = [];

  for (let token of tokens) {
    if (!isNaN(token)) {
      stack.push(parseFloat(token));
    } else {
      const b = stack.pop();
      const a = stack.pop();
      let result = 0;
      switch (token) {
        case "+":
          resutl = a + b;
          break;
        case "-":
          result = a - b;
          break;
        case "*":
          result = a * b;
          break;
        case "/":
          result = a / b;
          break;
      }
      stack.push(result);
    }
  }

  return stack[0];
}

// Example usage:
console.log(calc("+ 1 2")); // 3
console.log(calc("* 2 + 1 2")); // 6
console.log(calc("+ 9 * 2 3")); // 15
console.log(calc("- 1 2")); // -1
console.log(calc("- 9 * 2 3")); // 3
console.log(calc("/ 6 - 4 2")); // 3
