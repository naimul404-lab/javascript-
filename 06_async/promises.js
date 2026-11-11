function wait(milliseconds) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

console.log("Starting...");
await wait(300);
console.log("Finished after a short delay.");
