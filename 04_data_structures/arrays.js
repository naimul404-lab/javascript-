const numbers = [8, 3, 10, 1, 6];

console.log("First:", numbers[0]);
console.log("Sorted:", [...numbers].sort((a, b) => a - b));
console.log("Doubled:", numbers.map((number) => number * 2));
console.log("Above five:", numbers.filter((number) => number > 5));
