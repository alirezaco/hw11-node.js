function get(str1, str2) {
    return createParagraf(toObject(str1), toObject(str2))
}

function toObject(str = "") {
    let res = [];
    str = str.split("\r\n")
    str.map((element, index, arr) => {
        arr.splice(index, 1, element.split("-"))
    })
    str.forEach(element => {
        let obj = {};
        obj.id = element[0]
        obj.data = element[1]
        res.push(obj)
    })
    return checkObj(res);
}

function checkObj(arr = []) {
    arr.sort((a, b) => a.id - b.id)
    for (let index = 0; index < arr.length - 1; index++) {
        if (arr[index].id === arr[index + 1].id) {
            arr[index].data += ", " + arr[index + 1].data
            arr.splice(index + 1, 1)
            index--;
        }
    }
    return arr
}

function hasTwoPhone(str) {
    for (const i of str) {
        if (i == ",") {
            return true
        }
    }
    return false
}

function createSentence(name, phone = "") {
    let res = name
    if (phone === "") {
        res += " hasn’t any phone number."
    } else if (hasTwoPhone(phone)) {
        res += "’s phone numbers are " + phone
    } else {
        res += "’s phone number is " + phone
    }
    return res
}

function createParagraf(arrName = [], arrPhone = []) {
    let res = ""
    arrName.forEach(elementName => {
        let hasNumber = false;
        arrPhone.forEach(elementPhone => {
            if (elementName.id === elementPhone.id) {
                res += createSentence(elementName.data, elementPhone.data) + "\n"
                hasNumber = true;
            }
        })
        if (!hasNumber) {
            res += createSentence(elementName.data) + "\n"
        }
    })
    return res
}

module.exports = get;