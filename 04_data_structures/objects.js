const person = {
  name: "Ada",
  role: "programmer",
  introduce() {
    return `I'm ${this.name}, a ${this.role}.`;
  },
};

console.log(person.introduce());
console.log(Object.keys(person));
