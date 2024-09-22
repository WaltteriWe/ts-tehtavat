// TODO: Implement the squareRoot function
type num = number | null | undefined;
// parameter num should be a number or null or undefined and the function shoud return a number or a string
function squareRoot(num: num): number | string {
  if (num === undefined || num === null) {
    return "Input is undefined or null.";
  }
  // TODO: Check if the input is a valid number. If fail, return 'Invalid input. Please enter a valid number.'
  if (typeof num !== "number" || isNaN(num)) {
    return "Invalid input. Please enter a valid number.";
  }
  if (num < 0) {
    return "Cannot calculate square root of a negative number.";
  }

  // TODO: Handle cases where the input is negative. If fail, return 'Cannot calculate square root of a negative number.

  // Calculate the square root and return the result
  const sqrt = Math.sqrt(num);
  return sqrt;
}

// Prompt the user to enter a number
const userInput = prompt("Enter a number:");

// Convert user input to a number or keep it undefined if empty
// TODO: replce x and y with proper types
type x = num;
type y = num;
const numberInput: x | y = userInput ? parseFloat(userInput) : undefined;

// Call the squareRoot function and display the result
const result = squareRoot(numberInput);
console.log(result);
