
let numbers = [1,-1,2,3];

let result = 0
for( num of numbers )
     result += num;

console.log(result)

//  when we give initial value

// a = 0, c = 1 => a = 1
// a = 1, c = -1 => a = 0
// a = 0, c = 2 => a = 2
// a = 2, c = 3 => a = 5


// when we not give initial value the initial value set to first value
// a = 1, c = 1 => a = 0,
// a = 0, c = 2 => a = 2,
// a = 2, c = 3 => a = 5

let sum = numbers.reduce((accumulator, currentValue)=>{

    return accumulator + currentValue

})

console.log(sum);