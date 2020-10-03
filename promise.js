
console.log("before prepare food");


function prepareFood (data){

    let promise = new Promise((resolve,reject) => {

        if(data === 2) {
            setTimeout(()=>{
                console.log("food prepare");
                resolve("food is ready")
            },100)
 }
        else{

            reject("reject")
        }
    });

    return promise;
}

function prepareFrenchToast (data) {

    let promise = new Promise ((resolve,reject) => {
        if(data === 2) {
            setTimeout(()=>{
                console.log("prepare french toast");
                resolve("toast is ready")
            },200)
        }
        else {

            reject("reject")
        }
    })
    return promise;
}
function prepareCoffe () {

    let promise = new Promise ((resolve,reject) => {
        setTimeout(()=>{
            console.log("prepare coffe ");
            resolve("coffe is ready")
        },30)
    })
        return promise;
}

let promise = prepareFood(2)

    promise.then(response => { console.log(response)
        return prepareFrenchToast(2)
})
   .then(response => { console.log(response)
       return prepareCoffe() 
})
   .then(response => { console.log(response)
})
   .catch((err) => {
      console.log(err)
})
 

console.log("after prepare food")