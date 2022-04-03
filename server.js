const fs = require("fs");

const writeAndAppend = function(){
    fs.writeFileSync("notepad.txt","I am text editor and aloso manupaleter😁");

    fs.appendFileSync("notepad.txt","\nI am text editor ");
}

module.exports = writeAndAppend;

