console.log("data");


// javascript is dynamic programming langugage
// functional programming // object oriented

// two data types we have is javascript 

// 1: primitive // imutable // pass by value
// 2: non-primitive // mutable // pass by refrence


// javascipt know even we did'nt told that we are creating 
// an string explicitly as we have write  something in quotes
// he will know that is string 

// let string = "this is string"; // ["t","h","i", . , . , .];
// let newString = string.replace("h","H");
// console.log(newString)

// javascript store the string character in array 
// that why we are able to call the array method on it

// console.log(string[0]);
// console.log(string.length)
// string[1] = "H"
// console.log(string[1])


// comparing primitve data type

// const a = 10;
// const b = 10;

// console.log(a === b);  // pass by value true bcz value is same

// // comparing non-primitive data type

// const obj1 = { a:1 } // <01:02>
// const obj2 = { a:2 }//  <02:03

// console.log(obj1 === obj2 ) // pass by refrence false because refrence is diffrent

// const obj = {firstName : "syed" , lastName :  " Muneeb"}
// obj.firstName = "Syed"
// console.log("Non-Primitiv data type ",obj)

// const name = "muneeb"
// name = "syed"
// console.log("Primitive data type",name)

/// 

// const obj1 = {firstName : "Syed" , lastName : "Muneeb"}
// const obj2 = obj1

// obj1.lastName = "Rehman";
// console.log(obj2);

// console.log(obj1===obj2)  // true