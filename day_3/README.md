# JavaScript Basics

A comprehensive guide to fundamental JavaScript concepts and operations.

## 📖 Overview

This repository covers essential JavaScript topics from videos 22-39 of Osama Elzero's JavaScript course. It provides practical examples and exercises to reinforce learning.

## 📚 Table of Contents

- [Numbers](#numbers)
- [String Methods](#string-methods)
- [Comparison Operators](#comparison-operators)
- [Control Flow](#control-flow)
- [Nullish Coalescing & Logical OR](#nullish-coalescing--logical-or)
- [Switch Statements](#switch-statements)

## Numbers

### Overview

JavaScript numbers represent both integers and floating-point values. They include special values like `NaN` (Not a Number) and `Infinity`.

### Key Concepts

- **Integer**: Whole numbers (e.g., `10`, `-5`)
- **Float**: Decimal numbers (e.g., `3.14`, `2.5`)
- **NaN**: Result of invalid mathematical operations
- **Infinity**: Result of division by zero

### Code Examples

```javascript
let integer = 10;
let float = 3.14;
let calculation = "5" * 2; // 10 (string coercion)
let invalidOperation = "hello" * 2; // NaN
let infinity = 1 / 0; // Infinity

console.log(integer, float, calculation, invalidOperation, infinity);
```

### Useful Methods

```javascript
let number = 12.3456;

// Format decimal places
console.log(number.toFixed(2)); // "12.35"

// Parse integers from strings
console.log(parseInt("42px")); // 42

// Parse floats from strings
console.log(parseFloat("3.14")); // 3.14
```

## String Methods

### Overview

Strings are sequences of characters with built-in methods for manipulation and analysis.

### Essential Methods

- `length` - Returns string length
- `toUpperCase()` - Converts to uppercase
- `toLowerCase()` - Converts to lowercase
- `slice()` - Extracts a portion of the string
- `includes()` - Checks if string contains substring
- `replace()` - Replaces substring with new value

### Code Examples

```javascript
let text = "Hello World";

console.log(text.length); // 11
console.log(text.toUpperCase()); // "HELLO WORLD"
console.log(text.toLowerCase()); // "hello world"
console.log(text.slice(0, 5)); // "Hello"
console.log(text.includes("World")); // true
console.log(text.replace("World", "JS")); // "Hello JS"
```

### Practice Exercise

Create a string `"JavaScript is fun"` and perform the following operations:

1. Print the character count
2. Convert to uppercase
3. Extract "Script" using `slice()`
4. Replace "fun" with "awesome"
5. Check if the string contains "Java"

## Comparison Operators

### Overview

Comparison operators evaluate relationships between values and return boolean results.

### Operator Types

- `==` - Loose equality (type coercion)
- `===` - Strict equality (no type coercion)
- `!=` - Loose inequality
- `!==` - Strict inequality
- `<`, `>`, `<=`, `>=` - Relational operators

### Code Examples

```javascript
console.log(5 == "5"); // true (type coercion)
console.log(5 === "5"); // false (strict comparison)
console.log(5 != 10); // true
console.log(5 !== "5"); // true (different types)
console.log(7 > 3); // true
console.log(7 <= 7); // true
```

### Practice Exercise

1. Store two numbers and test all comparison operators
2. Compare `10` and `"10"` using both `==` and `===` to observe the difference

## Control Flow

### Overview

Control flow structures direct program execution based on conditions.

### Conditional Statements

#### If/Else Statements

```javascript
let age = 18;

if (age < 18) {
  console.log("You are a minor");
} else if (age === 18) {
  console.log("Just became an adult");
} else {
  console.log("You are an adult");
}
```

#### Ternary Operator

A concise alternative to if/else for simple conditions:

```javascript
let age = 18;
let status = age >= 18 ? "Adult" : "Minor";
console.log(status); // "Adult"
```

## Nullish Coalescing & Logical OR

### Overview

These operators provide default values but handle different scenarios.

### Key Differences

- **Nullish Coalescing (`??`)**: Returns right operand only when left is `null` or `undefined`
- **Logical OR (`||`)**: Returns right operand for any falsy value (`0`, `""`, `false`, `null`, `undefined`)

### Code Examples

```javascript
let nullValue = null;
let undefinedValue = undefined;
let zeroValue = 0;
let emptyString = "";

// Nullish coalescing - only null/undefined trigger default
console.log(nullValue ?? "default"); // "default"
console.log(zeroValue ?? "default"); // 0
console.log(emptyString ?? "default"); // ""

// Logical OR - any falsy value triggers default
console.log(nullValue || "default"); // "default"
console.log(zeroValue || "default"); // "default"
console.log(emptyString || "default"); // "default"
```

## Switch Statements

### Overview

Switch statements provide an elegant alternative to multiple if/else conditions when comparing a single value against multiple possibilities.

### Syntax Components

- `switch` - Initiates the statement
- `case` - Defines each condition
- `break` - Prevents fall-through to next case
- `default` - Handles unmatched values

### Code Examples

```javascript
let dayNumber = 3;
let dayName;

switch (dayNumber) {
  case 1:
    dayName = "Sunday";
    break;
  case 2:
    dayName = "Monday";
    break;
  case 3:
    dayName = "Tuesday";
    break;
  case 4:
    dayName = "Wednesday";
    break;
  case 5:
    dayName = "Thursday";
    break;
  case 6:
    dayName = "Friday";
    break;
  case 7:
    dayName = "Saturday";
    break;
  default:
    dayName = "Invalid day";
}

console.log(dayName); // "Tuesday"
```

## 🚀 Getting Started

1. Clone this repository
2. Open the JavaScript files in your preferred editor
3. Run examples in browser console or Node.js
4. Complete the practice exercises

## 📝 Notes

- Always use strict equality (`===`) unless type coercion is specifically needed
- Remember to include `break` statements in switch cases
- Choose between `??` and `||` based on whether you want to handle falsy values or only null/undefined

## 🔗 Resources

- [Osama Elzero JavaScript Course](https://www.youtube.com/playlist?list=PLDoPjvoNmBAx3kiplQR_oeDqLDBUDYwVv)
- [MDN JavaScript Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

---
