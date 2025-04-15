// Task -1:
// Find the lowest number in the array below.

// const heights2 = [167, 190, 120, 165, 137];
//  function getSmall (numbers){
//     let small = numbers[0];
//     for(const num of numbers){
//         if(num < small){
//             small = num;
//         }
//     }
//     return small;
//  }
//  const low = getSmall(heights2);
// //  console.log(low);
// Task -2:
// Find the friend with the smallest name.
const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

function getSmallName (names){
    let min = names[0];
    for(const name of names){
        if(name.length < min.length){
            min = name;
        }
    }
    return min;
}
const cheap = getSmallName(heights2);
// console.log(cheap)

// Task-3:
// Your task is to calculate the total budget required to buy electronics:

//     laptop = 35000 tk
//     tablet = 15000 tk
//     mobile = 20000 tk
// Write a JavaScript function named calculateElectronicsBudget that takes in the number of laptop, tablets, and mobile and returns the total money required.

const perLaptopPrice = 35000;
const perTabletPrice = 15000;
const perMobilePrice = 20000;

function calculateElectronicsBudget (laptopQuantity , tabletQuantity, mobileQuantity){
const laptopTotalTk = laptopQuantity * perLaptopPrice;
const tabletTotalTk = tabletQuantity * perTabletPrice;
const mobileTotalTk = mobileQuantity * perMobilePrice;

const total = laptopTotalTk + tabletTotalTk + mobileTotalTk;
return total;
}

// const getTotal = calculateElectronicsBudget(1, 2, 4);
// console.log(getTotal);

// Task-4:
// You are given an array of phone objects, each containing information about the model, brand, and price. Your task is to write a JavaScript function named findAveragePhonePrice that takes this array as input and returns the average price of phone.
// Input

  const phones = [
        { model: "PhoneA", brand: "Iphone", price: 95000 },
        { model: "PhoneB", brand: "Samsung", price: 40000 },
         { model: "PhoneC", brand: "Oppo", price: 26000 },
        { model: "PhoneD", brand: "Nokia", price: 35000 },
        { model: "PhoneE", brand: "Iphone", price: 105000 },
        { model: "PhoneF", brand: "HTC", price: 48000 },
    ];

   function findAveragePhonePrice(phonesQuantity){
    let sum = 0;
    for(const phone of phones){
        sum = sum + phone.price;
    }
    let averagePrice = sum / phonesQuantity;
    return averagePrice;
   }
//    const getTotal = findAveragePhonePrice(6)
//    const getTotal = findAveragePhonePrice(phones.length)
//    console.log(getTotal);
// Task -5: (Hard)
// For each employee their current salary is calculated by multiplying yearly increment with experience then adding the result to the starting salary. Now calculate is the total salary has to be provided by the company in a month.

//  const employees = [
//             { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
//             { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
//             { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
//             { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
//         ];

