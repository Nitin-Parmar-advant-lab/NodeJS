const person = {
  name: "nitin",
  age: "99",
  greet() {
    console.log("Hi, +", this.name);
  },
};

const printName = ({ name }) => {
  console.log(name);
};

printName(person);
// output: nitin

// in this destructuring, we only get what we want all other object properties where droped
// used a lot in React though