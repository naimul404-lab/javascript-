import readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

const rl = readline.createInterface({ input, output });
const tasks = [];

async function main() {
  try {
    while (true) {
      console.log("\n1. List tasks\n2. Add task\n3. Remove task\n4. Quit");
      const choice = (await rl.question("Choose: ")).trim();

      if (choice === "1") {
        if (tasks.length === 0) console.log("No tasks yet.");
        tasks.forEach((task, index) => console.log(`${index + 1}. ${task}`));
      } else if (choice === "2") {
        const task = (await rl.question("Task: ")).trim();
        if (task) tasks.push(task);
      } else if (choice === "3") {
        const index = Number(await rl.question("Task number: ")) - 1;
        if (Number.isInteger(index) && index >= 0 && index < tasks.length) {
          tasks.splice(index, 1);
        } else {
          console.log("That task number does not exist.");
        }
      } else if (choice === "4") {
        break;
      } else {
        console.log("Choose 1, 2, 3, or 4.");
      }
    }
  } finally {
    rl.close();
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
