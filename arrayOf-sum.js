let numbers = [44, 20, 30, 19, 55, 89, 90];
let sum = 0;
for(let i = 0; i < numbers.length; i++){
    const element = numbers[i];
    sum = sum + element;
}
// console.log(sum)

function arrayTotal(numbers){
    let sum = 0;
    for(let i = 0; i < numbers.length; i++){
        const element = numbers[i]
        sum = sum +  element;
    }
    return sum;
}

let TotalNumbers = arrayTotal([83, 77, 87, 30, 44]);
console.log(TotalNumbers);