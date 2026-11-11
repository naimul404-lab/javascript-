export function calculate(a, operator, b) {
  if (!Number.isFinite(a) || !Number.isFinite(b)) {
    throw new TypeError("Both values must be finite numbers");
  }

  switch (operator) {
    case "+": return a + b;
    case "-": return a - b;
    case "*": return a * b;
    case "/":
      if (b === 0) throw new RangeError("Cannot divide by zero");
      return a / b;
    default: throw new Error("Supported operators: +, -, *, /");
  }
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const [left, operator, right] = process.argv.slice(2);
  try {
    console.log(calculate(Number(left), operator, Number(right)));
  } catch (error) {
    console.error(error.message);
    console.error("Usage: npm run calculator -- 12 + 8");
    process.exitCode = 1;
  }
}
