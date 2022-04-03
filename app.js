const writeAndAppend = require("./server");
const validator = require('validator');

// writeAndAppend();

console.log(validator.isEmail('nkkadiya@gmail.com'));
console.log(validator.isEmail('nkkadiyagmail.com'));
