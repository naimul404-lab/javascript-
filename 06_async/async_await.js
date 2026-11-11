function wait(milliseconds) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

async function main() {
  console.log("Loading...");
  await wait(300);
  console.log("Loaded!");
}

main().catch((error) => {
  console.error("Unexpected error:", error);
  process.exitCode = 1;
});
