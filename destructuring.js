console.log("destructuring");


// destructuring


// var obj = {

//     firstName : "Syed",
//     lastName  : "Muneeb",
//     age : 18,

//     skillsIn : {

//         one : "reactjs",
//         two : "nodejs",

//             newObj : {

//                 bar : "hello bar"
//             }
//     }
// }

// const {firstName} = obj;
// firstName = "rehman";
// console.log(firstName)

// const { firstName , 
//         skillsIn , 
//         skillsIn: {one,two},
//         skillsIn:{newObj : {bar}}
//         } = obj

// console.log(firstName , skillsIn,  one , two ,bar )
 
// console.log(obj.skillsIn.newObj.bar)


// destructuring of object


// let arr = ["syed", "", "muneeb",18];

// let [firstName , empty ,lastName , age] = arr;

// console.log(firstName);
// console.log(empty);
// console.log(lastName);
// console.log(age);


// const obj = {

//     firstName : "syed",
//     lastName  : "Muneeb",
//     age : 18,

//     skillsIn : {

//         one : "reactjs",
//         two : "nodejs",

//             newObj : {

//                 userName : "sunny",
//                 password : "extreme"
//          }
//     }
// }
// console.log("Result", obj.skillsIn.newObj.userName)



// const {firstName , skillsIn : { one,two },
//          skillsIn:{newObj : { userName }} } = obj

// console.log(firstName , one , two , userName)


// const arr = ["syed","Muneeb",18];
// const [firstName,lastName,age ] = arr;

// console.log(firstName);
// console.log(lastName);
// console.log(age);


// let arr = ["hello","world","bar"]

// let [first,second,third] = arr

// console.log(first,second,third);

// skip the first

// let [, , third] = arr;

// console.log(third)

// let obj = {

//     firstName : "Syed",
//     lastName : "Muneeb",
//     profession : "Developer"
// }

    // renaming 
    
// let { profession : reactJS } = obj;
// console.log(reactJS)

// let { profession } = obj
// console.log(profession)

// console.log(obj)

//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx//


let obj = {

    firstName : "Syed",
    lastName : "Muneeb",
    address: {

        address1 : "karachi",
        address2 : "lahore"
    }
}

let { address : { address1,address2 : newAddress } } = obj
console.log(address1,newAddress)