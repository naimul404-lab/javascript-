const count = 42;
const price = 19.99;
const title = "Learning JavaScript";
const active = true;
const missing = null;
let notAssigned;

for (const value of [count, price, title, active, missing, notAssigned]) {
  console.log(value, "=>", typeof value);
}
console.log("Array:", Array.isArray([1, 2, 3]));
