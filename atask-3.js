// node atask-3.js

function checkDigitsInName(name) {
    if(typeof name !== "string"){
        return "INVALID INPUT"
    }
    let n = /\d/.test(name);
    return n;
}
console.log()
