let fs = require("fs")

fs.writeFileSync("./files/from.txt", "hello")

let r = fs.readFileSync("./files/from.txt", "utf8")

fs.writeFileSync("./files/to.txt", r)

fs.writeFileSync("./files/append.txt", " add")

let p = fs.readFileSync("./files/append.txt", "utf8")

fs.appendFileSync("./files/to.txt", p)