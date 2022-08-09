const minister = 11100;
const business = 2250;
const army = 5560;

// if(minister < business){
//     console.log('Business man is rich then minister')
// }
// else{
//     console.log('minister is rich')
// }
/*
if(minister > business && minister > army){
    console.log('minister is rich above all.')
}
else if(business > minister && business > army){
    console.log('Business man is rich.')
}
else{
    console.log('Army is rich above all')
}
*/

// const bigPosition = Math.max(minister, business, army);
// console.log('Big position is', bigPosition);

function  largestOfThreeNumbers(first, second, third){
    if(first > second && first > third){
        return 'The first number is large', first;
    }
    else if(second > first && second > third){
        return 'The second number is large',  second;
    }
    else{
        const thirdNum = 'The third number is large '+ third;
        return thirdNum;
    }
    
}

const bigNumber = largestOfThreeNumbers(300, 400, 500);
console.log(bigNumber);

function smallestOfThreeNumbers (first, second, third){
    if(first < second && first < third){
        return 'The number is small & it is', first;
    }
    else if(second < first && second < third){
        return 'The number is small & it is', second;
    }
    else {
        return 'The number is small & it is ' + third;
    }
}

const smallestNumber = smallestOfThreeNumbers(447, 837, 180);
console.log(smallestNumber);
