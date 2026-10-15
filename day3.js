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

// 7. CAPITALIZE
// Pseudocode: If the word is empty, return it; otherwise uppercase the first letter and lowercase the rest.
function capitalize(word) {
    if (word.length === 0) {
        return word;
    }
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
}
console.log("capitalize:", capitalize("kigali"));  // Kigali
console.log("capitalize:", capitalize("RWANDA"));  // Rwanda
console.log("capitalize:", capitalize(""));        // empty string (edge case)

// 8. COUNT VOWELS
// Pseudocode: Lowercase the text, loop over its characters, and count a/e/i/o/u.
function countVowels(text) {
    let count = 0;
    const lowerText = text.toLowerCase();
    for (let character of lowerText) {
        if ("aeiou".includes(character)) {
            count++;
        }
    }
    return count;
}
console.log("countVowels:", countVowels("Kigali"));       // 3
console.log("countVowels:", countVowels("EDUCATION"));    // 5
console.log("countVowels:", countVowels("rhythm"));       // 0 (edge case)

// 9. IS PALINDROME
// Pseudocode: Lowercase the word, reverse its characters, and compare both strings.
function isPalindrome(word) {
    const lowerWord = word.toLowerCase();
    const reversedWord = lowerWord.split("").reverse().join("");
    return lowerWord === reversedWord;
}
console.log("isPalindrome:", isPalindrome("racecar"));  // true
console.log("isPalindrome:", isPalindrome("hello"));    // false
console.log("isPalindrome:", isPalindrome("A"));        // true (edge case)
