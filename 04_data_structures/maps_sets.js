const uniqueNumbers = new Set([1, 2, 2, 3]);
const scores = new Map([
  ["Ada", 98],
  ["Grace", 95],
]);

console.log("Unique:", [...uniqueNumbers]);
console.log("Ada's score:", scores.get("Ada"));
