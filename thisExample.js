
"use strict";

// console.log(this);

// function hello (){

//     console.log(this)
// }

// hello();

// const hi = () => {

//     console.log(this)
// }

// hi()

// let obj = {

//     age : 18,
//     calculate : () => console.log(this),
//     calculate2 : function() { console.log(this) }
// }

// obj.calculate()
// obj.calculate2()

// console.log(this)

// console.log(this === window)


// let obj = {

//     name : "Syed Muneeb",
//     print : function () {

//         setTimeout(function(){

//             console.log(this);

//         },2000)
//     }
// }



/// let run lexical depend on there parent

const name = "muneeb";

let obj = {

    name : "Syed Muneeb",
    print : function () {

        setTimeout(() => {

            console.log(this);

        },2000)
    },
    another : () => {
        console.log(this.name)

    }
}

obj.print();
obj.another()

console.log(this)



