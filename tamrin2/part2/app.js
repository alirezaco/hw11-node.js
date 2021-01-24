let fs = require("fs")

fs.writeFileSync("./files/from.txt", "hello")

let r = fs.readFileSync("./files/from.txt", "utf8")

fs.writeFileSync("./files/to.txt", r)