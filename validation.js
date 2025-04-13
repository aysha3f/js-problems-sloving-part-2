function multiply(num1, num2){
  if(typeof num1 !== 'number' || typeof num2 !== 'number' ) {
    return 'Please provide a number'
  }
    const mult = num1 * num2;
    return mult;
}

const result = multiply (5, 'seven');
// console.log(result);

function fullName (first, second){
   
    if(typeof first !== 'string'){
        return 'First name should be a string'
    }
    else if(typeof second !== 'string'){
        return ' Second name should be a string'
    }
   
    const full = first + ' ' + second;
    return full;
}

const full = fullName ('Akmal')
// console.log(full);


function getPrice(product){
    const price =  product.price;
    return price;
}

const price = getPrice({name: 'chlkani dandi', price: 35, color: 'blue'})