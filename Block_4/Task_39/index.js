// function ryangosling(arr) {
//     return arr.map(str => str.push("!"))
// } это неверно 

function ryangosling(arr) {
    return arr.map(str => str + "!");
}

const ryangosling = (arr) => arr.map(str => str + "!");