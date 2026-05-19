In modern JavaScript, you should almost always use let or const and avoid using var. 

 
While both let and var are used to declare variables, let was introduced in 2015 (ES6) to fix long-standing issues with how var handles scope and accessibility. 

 
Why let is the standard
Block Scope: Variables declared with let only exist inside the specific block (like an if statement or for loop) where they are defined. Variables declared with var "leak" out of these blocks and are available throughout the entire function.

No Redeclaration: let prevents you from accidentally declaring the same variable name twice in the same scope, which helps avoid bugs. var allows this without error.

Cleaner Hoisting: With var, you can technically use a variable before it is declared (it will just be undefined), which is confusing. let forces you to declare a variable before using it, making your code more predictable. 


 
- Use const by default for any variable that doesn't need to be changed.
- Use let if you know you need to reassign the value later (like in a loop).
- Avoid var entirely unless you are maintaining very old legacy code. 

# const > let > var

---

# What is Hoisted
- Hoisting is a behavior in JavaScript where variable, function, and class declarations are conceptually moved to the top of their containing scope during the compilation phase, before the code is executed. 

- This mechanism ensures that the JavaScript engine knows about these declarations in memory before executing the code line-by-line, allowing them to be used before they are actually defined in the source code

--- 
### In JavaScript, both let and var are hoisted, but they behave completely differently during execution.

# How var is Hoisted
- Behavior: The JavaScript engine moves the declaration to the top of its scope and initializes it as undefined.
- Result: You can access the variable before its actual line of code without crashing.
 
```
console.log(x); // Outputs: undefined
var x = 5;
```

# How let is Hoisted
- Behavior: The engine moves the declaration to the top of its scope but does not initialize it.
- Temporal Dead Zone (TDZ): The variable exists but cannot be accessed until the execution reaches the actual line of declaration.
- Result: Accessing it early throws a ReferenceError.
 
```
console.log(y); // Throws: ReferenceError: Cannot access 'y' before initialization
let y = 10;
```
 
Summary of Hoisting Differences
var hoists declaration and initialization (as undefined). 
let hoists declaration only (leaves variable uninitialized in the TDZ). 

- const is also same as let, hoisted, but not initialize

# Functions 
- normal function are also hoisted 
1. Function Declarations
- Behavior: The entire function (name and body) is hoisted to the top.
- Result: You can safely call the function before writing it.
```
greet(); // Outputs: "Hello!"

function greet() {
  console.log("Hello!");
}
```

2. Using let or const:


```
sayBye(); // Throws: ReferenceError (Cannot access before initialization)

const sayBye = function() {
  console.log("Bye!");
};
```