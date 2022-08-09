// Fibonacci series
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 98

/*
3rd = 2nd + 1st
4th = 3rd + 2nd
5th = 4th + 3rd
6th = 5th + 4th
7th = 6th + 5th
nth = (n-1)th + (n-2)th
*/

// const fibo = [0, 1];
// for(let i = 2; i <=11; i++){
//     fibo[i] = fibo[i - 1] + fibo[i - 2];
// }
// console.log(fibo);

function fibonacciSeries(num){
    if(typeof num != 'number'){
        return 'Please give a number'
    }
    if(num < 2){
        return 'Please give a positive number greater then 1'
    }
    fibo = [0, 1];
    for(let i= 2; i <= num; i++){
        fibo[i] = fibo[i-1] + fibo[i-2]
    }
    return fibo;
}

let fibonacci = fibonacciSeries(8);
console.log(fibonacci);