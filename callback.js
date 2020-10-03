
console.log("before prepare food");


function prepareFood (prepareFoodCallback){

    setTimeout(()=>{
        console.log("food prepare");
        prepareFoodCallback("food is ready")
    },100)
}

function prepareFrenchToast (frenchToastcallBack) {

        setTimeout(()=>{
            console.log("prepare french toast");
            frenchToastcallBack("toast is ready")
        },200)
}

function prepareCoffe (coffeCallback) {

        setTimeout(()=>{
            console.log("prepare coffe ");
            coffeCallback("coffe is ready")
        },30)
}

function coffeCallback (response) {

        console.log("response === " , response);
}

function frenchToastcallBack (response){

        console.log("response === ", response);
        prepareCoffe(coffeCallback);
}

function prepareFoodCallback(response){

        console.log("response === " , response);
        prepareFrenchToast(frenchToastcallBack);
}


prepareFood(prepareFoodCallback);


console.log("after prepare food")