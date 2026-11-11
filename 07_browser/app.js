const message = document.querySelector("#message");
const button = document.querySelector("#change-message");
const items = document.querySelector("#items");

button.addEventListener("click", () => {
  message.textContent = "The button was clicked!";
  const item = document.createElement("li");
  item.textContent = `Added item ${items.children.length + 1}`;
  items.append(item);
});
