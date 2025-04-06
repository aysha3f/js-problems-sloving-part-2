const numbers =[65, 56,567,87,87,789,63,456,24]


const products = [
  {name: 'shampoo', price: 300 },  
  {name: 'chiruni', price: 100 },  
  {name: 'shirt', price: 700 },  
  {name: 'pant', price: 1200 },  
]

function getShoppingTotal(products){
let sum = 0;
    for(const product of products){
       sum = sum + product.price;
    }
    return sum;
}

const total = getShoppingTotal(products);
console.log('total ajke khosabe:', total);