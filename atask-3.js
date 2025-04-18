// node atask-3.js

function checkDigitsInName(name) {
    if(typeof name !== 'string'){
        return "Invalid Input"
    }
    

let n = /\d/.test(name)

    return n;
}
console.log(checkDigitsInName(34))
