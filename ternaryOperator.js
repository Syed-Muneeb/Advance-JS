console.log("ternary")


let a = 10;
let b = 20;

if(a < b){

    if(a === 11){

        console.log(true)
    }
    else{
        console.log("inerr =",  false)
    }
}
else{

    console.log("Parent =" , false)
}

// a < b ? console.log(true) : console.log(false);

a < b ? a === 10 ?  console.log( true ) : console.log("inner = ",false) : console.log("outer = ",false)