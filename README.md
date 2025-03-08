# JavaScript & TypeScript Utility Functions

A collection of five utility functions implemented in both JavaScript and TypeScript for common calculations.

## Functions

### 1. Calculate Rectangle Area
```javascript
// JavaScript
calculateRectangleArea(length, width)

// TypeScript
calculateRectangleArea(length: number, width: number): number
```
- Calculates area by multiplying length and width
- Example: `calculateRectangleArea(5, 3)` returns `15`

### 2. Calculate Circle Properties
```javascript
// JavaScript
calculateCircleProperties(radius)

// TypeScript
calculateCircleProperties(radius: number): CircleProperties
// where CircleProperties is an interface with diameter, circumference, and area
```
- Returns diameter, circumference, and area for a given radius
- Example: `calculateCircleProperties(5)` returns `{ diameter: 10, circumference: 31.4159, area: 78.5398 }`

### 3. Calculate Third Angle of Triangle
```javascript
// JavaScript
calculateThirdAngle(angleA, angleB)

// TypeScript
calculateThirdAngle(angleA: number, angleB: number): number
```
- Calculates the third angle given two angles of a triangle
- Example: `calculateThirdAngle(80, 65)` returns `35`

### 4. Calculate Date Difference
```javascript
// JavaScript
calculateDateDifference(date1, date2)

// TypeScript
calculateDateDifference(date1: string, date2: string): number
```
- Calculates days between two dates in 'YYYY-MM-DD' format
- Example: `calculateDateDifference("2024-03-19", "2024-03-21")` returns `2`

### 5. Get Name Initials
```javascript
// JavaScript
getInitials(name)

// TypeScript
getInitials(name: string): string
```
- Returns uppercase initials from a full name
- Example: `getInitials("John Doe")` returns `"JD"`

## Error Handling
All functions in both implementations include validation and proper error messages for invalid inputs.

## JavaScript Implementation
The JavaScript file includes all functions with runtime type checking.

## TypeScript Implementation
The TypeScript file includes:
- Strong type definitions for all functions
- Interface for the Circle Properties
- The same validation logic as the JavaScript version
- Export statements for use in other modules

## Running the Code

### JavaScript
```bash
node index.js
```

### TypeScript
```bash
# Compile TypeScript to JavaScript
tsc index.ts

# Run the compiled JavaScript
node index.js
```

## Requirements
- Node.js v7.0.0 or higher (for the exponentiation operator `**`)
- TypeScript compiler (for TypeScript version only)