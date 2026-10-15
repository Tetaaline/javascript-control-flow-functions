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

// 4. FORMAT PRICE
// Pseudocode: Format the amount with toLocaleString and append the currency; default to RWF.
function formatPrice(amount, currency = "RWF") {
    return `${amount.toLocaleString("en-US")} ${currency}`;
}
console.log("formatPrice:", formatPrice(5000));             // 5,000 RWF
console.log("formatPrice:", formatPrice(1500000));          // 1,500,000 RWF
console.log("formatPrice:", formatPrice(2500, "USD"));     // 2,500 USD

// 5. GET GRADE
// Pseudocode: Guard against non-numbers and scores outside 0–100, then check grades high to low.
function getGrade(score) {
    if (typeof score !== "number" || !Number.isFinite(score) || score < 0 || score > 100) {
        return "Invalid score";
    }
    if (score >= 80) {
        return "A";
    } else if (score >= 70) {
        return "B";
    } else if (score >= 60) {
        return "C";
    } else if (score >= 50) {
        return "D";
    }
    return "F";
}
console.log("getGrade:", getGrade(85));   // A
console.log("getGrade:", getGrade(55));   // D
console.log("getGrade:", getGrade(101));  // Invalid score (edge case)

// 6. MAX WITHOUT Math.max
// Pseudocode: If no numbers are passed, return undefined; otherwise loop to find the largest.
function max(...numbers) {
    if (numbers.length === 0) {
        return undefined;
    }
    let largest = numbers[0];
    for (let number of numbers) {
        if (number > largest) {
            largest = number;
        }
    }
    return largest;
}
console.log("max:", max(4, 9, 2));       // 9
console.log("max:", max(-5, -2, -10));   // -2
console.log("max:", max());              // undefined (edge case)
