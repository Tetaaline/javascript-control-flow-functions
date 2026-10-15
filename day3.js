// DAY 3: FUNCTION FACTORY — 12 FUNCTIONS + TESTS

// 1. SQUARE
// Pseudocode: Receive n and return n multiplied by itself.
const square = n => n * n;
console.log("square:", square(4));   // 16
console.log("square:", square(-3));  // 9
console.log("square:", square(0));   // 0 (edge case)

// 2. IS EVEN
// Pseudocode: Return true when n divided by 2 has remainder 0; otherwise false.
function isEven(n) {
    return n % 2 === 0;
}
console.log("isEven:", isEven(4));  // true
console.log("isEven:", isEven(7));  // false
console.log("isEven:", isEven(0));  // true (edge case)

// 3. TEMPERATURE CONVERSIONS
// Pseudocode: C to F = (C * 9/5) + 32; F to C = (F - 32) * 5/9.
function celsiusToFahrenheit(c) {
    return (c * 9 / 5) + 32;
}
function fahrenheitToCelsius(f) {
    return (f - 32) * 5 / 9;
}
console.log("celsiusToFahrenheit:", celsiusToFahrenheit(0));    // 32
console.log("celsiusToFahrenheit:", celsiusToFahrenheit(100));  // 212
console.log("celsiusToFahrenheit:", celsiusToFahrenheit(-40));  // -40 (edge case)
console.log("fahrenheitToCelsius:", fahrenheitToCelsius(32));   // 0
console.log("fahrenheitToCelsius:", fahrenheitToCelsius(212));  // 100
console.log("fahrenheitToCelsius:", fahrenheitToCelsius(-40));  // -40 (edge case)
