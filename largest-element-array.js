// function largestNumber(numbers){
//     let largeNumber = 0;
//     for(let i = 0; i < numbers.length; i++){
      
//        element = numbers[i]
//        if(element > largeNumber){
//         largeNumber  = element;
//        }
     
//     }
    
//     return largeNumber;
// }

// let friendAges = [28, 27, 25, 29, 30, 33, 35, 23];
// let bigNumber = largestNumber(friendAges);
// console.log(bigNumber);

// var arr = [3, 6, 2, 56, 32, 5, 89, 32];
// var largest = arr[0];

// for (var i = 0; i < arr.length; i++) {
//     const element = arr[i]
//     // console.log(element);
//     if (arr[i] > largest ) {
//         largest = arr[i];
//     }
// }

// let largeNumber = 
// console.log(largest)

// function largestNumber(numbers){
//     let largest = 0;
//     for(let i = 0; i < numbers.length; i++){
//         const element = numbers[i]
//         if(element > largest){
//             largest = element;
//         }
//     }
//     return largest;
// }

// let array = [45, 323, 98, 098, 23, 876, 900];
// let bigNumber = largestNumber(array);
// console.log(bigNumber);
// smalllest number in an array

function smallestNumber(numbers){
    let small = array[0];
    for (let i = 0; i < numbers.length; i++){
        const element = numbers[i];
        if(element < small ){
            small = element;
        }
    }
    return small;
}

let array = [87, 87, 9, 23, 2, 76, 83];
let smallNumber = smallestNumber(array);
console.log(smallNumber)