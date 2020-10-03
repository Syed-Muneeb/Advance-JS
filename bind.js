

// function invokeTwice(cb){

//     cb();
//     cb();
    
// }

// let dog = {

//     age : 5,
//     growOneYear : function(){

//         this.age += 1
//     }
// }

// console.log(dog);
// dog.growOneYear();
// console.log(dog)

// invokeTwice(dog.growOneYear);
// console.log(dog)


        // it did,nt work 

// let get = invokeTwice.call(dog,dog.growOneYear);
// console.log(get)
// console.log(dog)


// saving this with bind

// const dog = {

//     age : 5,
//     growOneYear : function(){

//         this.age += 1
//     }
// }

// function invokeTwice (cb){

//     cb();
//     cb();
// }

// const grow = dog.growOneYear.bind(dog);
// invokeTwice(grow);

// console.log(dog.age)


const driver = {

    name : "David",

    displayName : function (){

        console.log(this.name)
    }
}


const change = {

    name : "Muneeb"
}

driver.displayName.call(change)
driver.displayName.apply(change)

var get = driver.displayName.bind(change);
get()
