// console.log('spread Operator')

// let obj = {

//     firstName :  "Syed",
//     lastName  : "Muneeb"

// }

// let obj2 = {

//     ...obj
// };

// obj2.lastName = "azfar"

// console.log("first object ==> " , obj)
// console.log("second object ==> " , obj2)

//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx//


// let obj = {

//     firstName :  "Syed",
//     lastName  : "Muneeb"
// }

// let obj2 = {

//     ...obj,
//          obj : "azfar",
//          hello : "world"
// };

// console.log("first object ==> " , obj)
// console.log("second object ==> " , obj2)


// console.log({...obj})



//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx//


    let obj = {

        firstName :  "Syed",
        lastName  : "Muneeb",
        address : {

            address1 : "karachi",
            address2 : "lahore",
            skills : {

              front :  "html",
               back  :  "NodeJs"

            }          
        }
    }

    let obj2 = {

        ...obj,
        lastName : "azfar",
        address : {...obj.address, address1 : "islamabad"},
        address : {...obj.address.skills, front : "ReactJs"}
    };

    console.log("first object ==> " , obj)
    console.log("second object ==> " , obj2)    





    /// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx//
                //   examples 

    // function sum (x , y , z , a , b , c){

    //     return x + y + z + a + b + c
    // }


    // console.log(sum(1 , 2 , 3 ))

    // var arg = [1,2,3];
    // var arg2 = [1,3,];


    // console.log(sum(...arg , 4 , ...arg2 ,))

    // const datataField = [1940,0,1];
    // const d = new Date(...datataField);
    // console.log(d)

    // let arr1 = [1,4,5];
    // let arr2 = [1,2,3];

    // let arr = [...arr1,...arr2];
    // console.log(arr)

    

    // let obj = {

    //     foo : "hello",
    //     x  : 10
    // }

    // let obj2 = {

    //     bar : "hello",
    //     y : 12
    // }

    // let mergeObj = {...obj,...obj2}
    // console.log(mergeObj)
