console.log("hello");


let obj = {

    name : "Muneeb",
    city : "karachi",
    address : {

        address1 : "address1"
    }
}

let objectKeys = Object.keys(obj);
// console.log(objectKeys)
// console.log (typeof objectKeys[1])

// let objectValue = Object.values(obj);
// console.log(objectValue);

// let get = obj[objectKeys[1]];
// console.log(get)

for(var i = 0; i < objectKeys.length; i++){

        // console.log(objectKeys[i] , objectValue[i])

        console.log(objectKeys[i], obj[objectKeys[i]])
}
