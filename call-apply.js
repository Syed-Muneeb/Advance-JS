console.log("hello")

 // what if we want to set the value by ourselves ? Javascript offers a few you can do just that

 // thes are the methods

 // 1 : call()
 // 2 : apply()
 // 3 : bind()


// function multiply (num1,num2){

//     return num1 * num2
// }

// // let get = multiply(3 , 4);
// let get = multiply.call(window,4,4)
// console.log(get)


// // let set the value of this 

// // call methode 

// const mockingbird = {

//     title : "To kill a mocking bird",
//     describe : function(){

//         console.log(this );
//     }
// }

// const another = {

//         title : "Pride and prejudice"
// }

// function test (){

//     console.log(this.title)
// }

// test.call(another);

// mockingbird.describe()
// mockingbird.describe.call(another);


// apply 


// function multiply (num1,num2){

//     return num1 * num2
// }

// let get = multiply(3,4);

    // invoke in call
// let get = multiply.call(window,4 , 4)

    // invoke in apply
    // arguments are in array

// let get = multiply.apply(window,[4 , 4])

// console.log(get);


    // example of apply

// let obj = {

//     num1 : 5,
//     num2 : 4
// }    

// function multiply(){

//     return this.num1 * this.num2
// }

// let get = multiply.apply(obj);
// console.log(get)


// let obj = {

//     num1 : 4,
//     num2 : 6
// }

// function multiply () {

//      console.log(this)
// }

// let get = multiply.bind(obj);
// get()