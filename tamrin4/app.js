let par = require("./tools/checkFille")
let fs = require("fs");
let name = fs.readFileSync("./filles/name.txt", "utf8")
let phone = fs.readFileSync("./filles/number.txt", "utf8")
console.log("\n" + par(name, phone));