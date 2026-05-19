// console.log("Hi");

const fs = require('fs');

fs.writeFileSync('hello.txt', "hello me")

const txt = fs.readFileSync('hello.txt')

console.log(txt);
