let fs = require("fs")

fs.writeFile("./files/from.txt", "hello", function(err) {
    console.log(err);
    fs.readFile("./files/from.txt", "utf8", function(err3, data) {
        console.log(err3);
        fs.writeFile("files/to.txt", data, function(err2) {
            console.log(err2);
        })
    })
})