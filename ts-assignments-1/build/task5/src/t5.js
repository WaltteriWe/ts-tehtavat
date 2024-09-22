function lengthOrSquare(value) {
    // TODO: Use a type guard to check the actual type of 'value'
    if (typeof value === "string") {
        return value.length;
    }
    else if (typeof value === "number") {
        return value * value;
    }
    // if type is string, retrurn the length of the string
    // if type is number return the square of the number
}
// Prompt the user to enter a value as either a string or a number
const userInput = prompt("Enter a value as either a string or a number");
if (userInput === null) {
    throw new Error("Invalid input");
}
const parsedValue = isNaN(Number(userInput))
    ? userInput
    : Number(userInput);
// Call the lengthOrSquare function
const result = lengthOrSquare(parsedValue);
console.log(typeof result);
console.log(result);
export {};
