// DAY 2: CONTROL FLOW — CONDITIONALS AND LOOPS

// 1. EVEN OR ODD
// Pseudocode:
// - Store a number.
// - If its remainder when divided by 2 is 0, print "even".
// - Otherwise, print "odd".
let number = 7;
if (number % 2 === 0) {
    console.log("even");
} else {
    console.log("odd");
}

// 2. GRADE CALCULATOR
// Pseudocode:
// - Store a score.
// - Reject scores below 0 or above 100.
// - Check grades from highest to lowest and print the matching grade.
let score = 85;
if (score < 0 || score > 100) {
    console.log("Invalid score");
} else if (score >= 80) {
    console.log("A");
} else if (score >= 70) {
    console.log("B");
} else if (score >= 60) {
    console.log("C");
} else if (score >= 50) {
    console.log("D");
} else {
    console.log("F");
}

// 3. TICKET PRICE
// Pseudocode:
// - Store the person's age and student status.
// - If older than 65, the ticket is free.
// - Otherwise, children under 12 pay 2,000 RWF.
// - Otherwise, students pay 3,000 RWF; other adults pay 5,000 RWF.
let age = 20;
let isStudent = true;
if (age > 65) {
    console.log("Ticket price: Free");
} else if (age < 12) {
    console.log("Ticket price: 2000 RWF");
} else if (isStudent) {
    console.log("Ticket price: 3000 RWF");
} else {
    console.log("Ticket price: 5000 RWF");
}

// 4. DAY PLANNER
// Pseudocode:
// - Store a day name.
// - Use switch to print the activity for weekdays.
// - Print "No class" on Saturday and Sunday.
// - Use break to stop each case from falling through.
let day = "Monday";
switch (day) {
    case "Monday":
        console.log("HTML and CSS class");
        break;
    case "Tuesday":
        console.log("Control Flow class");
        break;
    case "Wednesday":
        console.log("Functions and Scope class");
        break;
    case "Thursday":
        console.log("JavaScript practice");
        break;
    case "Friday":
        console.log("Project work");
        break;
    case "Saturday":
    case "Sunday":
        console.log("No class");
        break;
    default:
        console.log("Invalid day");
}

// 5. COUNTDOWN
// Pseudocode:
// - Start at 10 and loop down to 1.
// - Print each number.
// - After the loop, print "Liftoff!".
for (let i = 10; i >= 1; i--) {
    console.log(i);
}
console.log("Liftoff!");

// 6. SUM AND AVERAGE
// Pseudocode:
// - Store the numbers in an array and start sum at 0.
// - Use for...of to add each number to sum.
// - Divide sum by the array length to get the average.
let numbers = [45, 78, 90, 62, 88];
let sum = 0;
for (let num of numbers) {
    sum += num;
}
let average = sum / numbers.length;
console.log("Sum:", sum);
console.log("Average:", average);

// 7. FIND THE FIRST NUMBER GREATER THAN 100
// Pseudocode:
// - Loop through the array values.
// - When a value greater than 100 is found, print it and break the loop.
let values = [25, 70, 120, 150, 200];
for (let value of values) {
    if (value > 100) {
        console.log("First number greater than 100:", value);
        break;
    }
}

// 8. SKIP NEGATIVES
// Pseudocode:
// - Loop through the array.
// - Use continue to skip values that are zero or negative.
// - Print the remaining positive values.
let mixedNumbers = [-5, 10, -2, 7, 0, 15];
for (let num of mixedNumbers) {
    if (num <= 0) {
        continue;
    }
    console.log(num);
}

// 9. MULTIPLICATION TABLE
// Pseudocode:
// - Loop from 1 to 12.
// - Multiply each loop number by 7 and print the formatted equation.
for (let i = 1; i <= 12; i++) {
    console.log(`7 x ${i} = ${7 * i}`);
}

// 10. FIZZBUZZ WITH KIGALI
// Pseudocode:
// - Loop from 1 through 100.
// - Check divisibility by 3 and 5 first and print FizzBuzz.
// - Otherwise, print Fizz for multiples of 3, Buzz for multiples of 5,
//   Kigali for multiples of 7, or the number if none apply.
for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else if (i % 7 === 0) {
        console.log("Kigali");
    } else {
        console.log(i);
    }
}

// CHALLENGE: RIGHT-ANGLED TRIANGLE
// Pseudocode:
// - Use an outer loop for rows 1 through 5.
// - For each row, start with an empty string.
// - Use an inner loop to add as many stars as the row number.
// - Print the completed row.
for (let row = 1; row <= 5; row++) {
    let stars = "";
    for (let col = 1; col <= row; col++) {
        stars += "*";
    }
    console.log(stars);
}
