
let obj = {

    firstName : "Syed",
    lastName  : "Muneeb",
    city : "karachi",

    adddress : {

            adddress1 : "address1",
            adddress2 : "address2"

    }
}

console.log(obj)

// let { firstName , ...restValue } = obj;
// console.log(firstName,restValue)


// let { lastName , ...obj } = obj;
// console.log(lastName,restValue)

let { lastName , adddress : { ...restValue } } = obj;
console.log(lastName,restValue)


// let { anotherValue , ...restValue } = obj;
// console.log(anotherValue,restValue)


// rest paratemeters

// function myFunc(...args){

    // let [num1,num2,num3] = args
    // return num1 + num2 + num3

//     return args[0] + args[1] + args[2]
// }

// console.log(myFunc(1,2,3))