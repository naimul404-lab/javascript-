# JavaScript Complete Pack

A hands-on JavaScript learning repository, from language fundamentals to browser DOM work, asynchronous programming, and small projects. Most examples use modern JavaScript (ES modules); browser examples run from a local web server, while Node.js examples require Node 18 or newer.

## Requirements

- Node.js 18+ for the Node examples
- A modern browser for DOM examples
- No third-party dependencies are needed

## Run examples

Node examples:

```bash
node 01_basics/values.js
node 03_functions/functions.js
node 06_async/promises.js
```

Browser examples: start a local server from the repository root (for example `python3 -m http.server 8000`) and open the relevant HTML page at `http://localhost:8000/`.

## Contents

- `01_basics/`: values, types, operators, and conditionals
- `02_control_flow/`: loops
- `03_functions/`: functions, arrow functions, and closures
- `04_data_structures/`: arrays, objects, and maps/sets
- `05_modules/`: ES module imports and exports
- `06_async/`: promises, async/await, and fetch
- `07_browser/`: DOM, events, and a small interactive page
- `08_projects/`: command-line calculator, quiz, and todo app

## Notes

The DOM examples need a browser. The command-line projects run in Node. The todo app stores data in memory for the current process only. Run each file independently unless the instructions say otherwise.

## License

MIT. See `LICENSE`.
