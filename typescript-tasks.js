// Task 1: Calculate the Area of a Rectangle
function calculateRectangleArea(length, width) {
    if (typeof length !== "number" || typeof width !== "number") {
        throw new Error("Both length and width must be numbers.");
    }
    return length * width;
}
// Task 2: Calculate Diameter, Circumference, and Area of a Circle
function calculateCircleProperties(radius) {
    if (typeof radius !== "number" || radius <= 0) {
        throw new Error("Radius must be a positive number.");
    }
    var diameter = 2 * radius;
    var circumference = parseFloat((2 * Math.PI * radius).toFixed(4));
    var area = parseFloat((Math.PI * Math.pow(radius, 2)).toFixed(4));
    return { diameter: diameter, circumference: circumference, area: area };
}
// Task 3: Calculate the Third Angle of a Triangle
function calculateThirdAngle(angleA, angleB) {
    if (typeof angleA !== "number" || typeof angleB !== "number") {
        throw new Error("Both angles must be numbers.");
    }
    if (angleA + angleB >= 180) {
        throw new Error("Sum of angles must be less than 180 degrees.");
    }
    return 180 - (angleA + angleB);
}
// Task 4: Calculate the Difference Between Two Dates in Days
function calculateDateDifference(date1, date2) {
    var oneDay = 24 * 60 * 60 * 1000; // Milliseconds in one day
    var firstDate = new Date(date1);
    var secondDate = new Date(date2);
    if (isNaN(firstDate.getTime()) || isNaN(secondDate.getTime())) {
        throw new Error("Invalid date format. Use 'YYYY-MM-DD'.");
    }
    return Math.floor(Math.abs((firstDate.getTime() - secondDate.getTime()) / oneDay));
}
// Task 5: Print Initials of a Name in Uppercase
function getInitials(name) {
    if (typeof name !== "string" || name.trim() === "") {
        throw new Error("Name must be a non-empty string.");
    }
    return name
        .split(" ")
        .map(function (word) { return word[0].toUpperCase(); })
        .join("");
}
// Example Usage
try {
    console.log("Task 1: Area of Rectangle =", calculateRectangleArea(5, 3)); // Output: 15
    console.log("Task 2: Circle Properties =", calculateCircleProperties(5)); // Output: { diameter: 10, ... }
    console.log("Task 3: Third Angle of Triangle =", calculateThirdAngle(80, 65)); // Output: 35
    console.log("Task 4: Date Difference =", calculateDateDifference("2024-03-19", "2024-03-21")); // Output: 2
    console.log("Task 5: Name Initials =", getInitials("John Doe")); // Output: JD
}
catch (error) {
    console.error(error.message);
}
