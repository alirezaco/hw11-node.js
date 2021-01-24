function fullName(fname, lname, cb) {
    let name = fname + " " + lname;
    cb(name);
}

fullName("Ali", "Ahmadi", function(fullname) {
    console.log(fullname);
})