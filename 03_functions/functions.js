function add(a, b) {
  return a + b;
}

function greet(name = "friend") {
  return `Hello, ${name}!`;
}

console.log(add(12, 8));
console.log(greet("Ada"));
console.log(greet());
