const fs = require('fs');

let error = fs.writeFileSync("./files/newfile.txt", ' ')

let res = fs.existsSync('./files/newfile.txt')

if (!res) {
    console.log("not exists");
} else {
    console.log("exists");
}