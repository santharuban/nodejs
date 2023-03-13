const url=require('url');

var webaddress='hrrp://localhost:3000/urlmodule.html?name=esgf&age=15';
var part=url.parse(webaddress,true);
console.log(part.host);
console.log(part.port);
console.log(part.pathname);
console.log(part.search);
console.log(part.query);
console.log(part.query.name);
console.log(part.query.age);

