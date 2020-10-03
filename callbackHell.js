
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

prepareFood(function (response){
      console.log("response === " , response);
          prepareFrenchToast(function  (response){
              console.log("response === ", response);
                  prepareCoffe(function  (response) {
                         console.log("response === " , response);
         });
    });
});


console.log("after prepare food")