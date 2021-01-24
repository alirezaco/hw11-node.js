const fs = require('fs');

fs.writeFile("./files/newfile.txt", '', function(err) {})
fs.access('./files/newfile00.txt', (err) => {
    if (err) {
        console.log("not exists");
    } else {
        console.log("exists");
    }
});