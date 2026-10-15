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

// 10. REPEAT ACTION
// Pseudocode: Loop from 1 to times and call the callback with each round number.
function repeatAction(times, callback) {
    for (let i = 1; i <= times; i++) {
        callback(i);
    }
}
console.log("repeatAction: three rounds");
repeatAction(3, round => console.log("Round", round));
console.log("repeatAction: one round");
repeatAction(1, round => console.log("Round", round));
console.log("repeatAction: zero rounds (edge case)");
repeatAction(0, round => console.log("Round", round)); // no callback calls

// 11. CREATE COUNTER USING A CLOSURE
// Pseudocode: Keep value inside the outer function and return methods that can update or read it.
function createCounter(start = 0) {
    let value = start;
    return {
        increment: function () {
            value++;
        },
        decrement: function () {
            value--;
        },
        getValue: function () {
            return value;
        }
    };
}
const counter1 = createCounter();
console.log("counter default:", counter1.getValue()); // 0 (edge case/default)
counter1.increment();
console.log("counter increment:", counter1.getValue()); // 1
counter1.decrement();
console.log("counter decrement:", counter1.getValue()); // 0
const counter2 = createCounter(10);
console.log("counter custom start:", counter2.getValue()); // 10
const counter3 = createCounter(-2);
console.log("counter negative start:", counter3.getValue()); // -2 (edge case)

// 12. MAKE DISCOUNT
// Pseudocode: Receive a percentage and return a function that calculates a discounted price.
function makeDiscount(percent) {
    return function (price) {
        return price - (price * percent / 100);
    };
}
const discount10 = makeDiscount(10);
const discount20 = makeDiscount(20);
console.log("10% discount:", discount10(1000)); // 900
console.log("20% discount:", discount20(500));  // 400
console.log("10% discount on zero:", discount10(0)); // 0 (edge case)

// SCOPE PUZZLE
// Predictions before running:
// - inner 3, because the let x inside the if block shadows the other x variables.
// - function 2, because a() has its own x = 2.
// - global 1, because the global x is unchanged.
let x = 1;
function a() {
    let x = 2;
    if (true) {
        let x = 3;
        console.log("inner", x);
    }
    console.log("function", x);
}
a();
console.log("global", x);
