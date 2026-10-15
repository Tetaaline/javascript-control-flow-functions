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
