//   node at-1.js

function calculateTax(income, expenses) {
    if(income < 0 || expenses < 0 || expenses > income){
         return "Invalid Input"
    }

    let tax = (income - expenses) * .20
    return tax;
}
// const getTax = calculateTax(10000, 3000);
// const getTax = calculateTax(34000, 1753);
// const getTax = calculateTax(5000, 1500);
// const getTax = calculateTax(7000, 7000);
// const getTax = calculateTax(-5000, 2000);
const getTax = calculateTax(6000, -1500);
console.log(getTax);


