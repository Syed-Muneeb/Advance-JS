
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

async function startProcess(){

try {

    let foodValue = await prepareFood(2);
    console.log(foodValue)

    let toastValue = await prepareFrenchToast(2);
    console.log(toastValue)

    let coffeValue = await prepareCoffe();
    console.log(coffeValue);

    }
    catch(err){

        console.log(err)
    }
}

startProcess()
 

console.log("after prepare food")