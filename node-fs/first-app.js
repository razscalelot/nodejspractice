// console.log("Hello From NodeJS");

const fs = require('fs');

// fs.writeFileSync('hello.txt', 'Hello Form NodeJS');
const r = fs.readFileSync('hello.txt', 'utf-8');
console.log(r);