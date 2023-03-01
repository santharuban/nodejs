var fs=require('fs');
var data=fs.readFileSync('index.js');
console.log(data.toString());
console.log("program closed")