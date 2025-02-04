# Javascript Function Reassignment Bug
This repository demonstrates a potential bug in Javascript related to function reassignment.  The `foo` function is initially defined and used, then reassigned to `null`.  Attempting to call it afterwards results in an error.

## How to Reproduce
1. Clone this repository.
2. Open `bug.js`.
3. Run the script using a Javascript interpreter (Node.js, browser console, etc.).
4. Observe the error when calling `foo` after reassignment.

## Solution
The solution (`bugSolution.js`) illustrates how to prevent unexpected errors caused by reassignment by using techniques such as immediately invoked function expressions (IIFEs), preventing reassignments by using `const` or `Object.freeze`. This shows a safe approach to using functions where the programmer is not responsible for reassignments.