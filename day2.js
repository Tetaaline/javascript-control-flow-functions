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