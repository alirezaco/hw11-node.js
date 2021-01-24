let fs = require("fs")

fs.writeFile("./files/from.txt", "hello", function(err) {
    console.log(err);
})

fs.readFile("./files/from.txt", "utf8", function(err, data) {
    fs.writeFile("./files/to.txt", data, function(err2) {
        console.log(err2);
    })
})

fs.writeFile("./files/append.txt", " add", function(err) {
    console.log(err);
})

fs.readFile("./files/append.txt", "utf8", function(err, data) {
    fs.appendFile("./files/to.txt", data, function(err2) {
        console.log(err2);
    })
})