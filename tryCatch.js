
try{

    console.log("start of try runs")

    if(false){

        throw new SyntaxError ("failed")
    }
    else{

        throw new SyntaxError ("error 2")

    }

    console.log("end of try runs -- never reached")
}

catch(err){

    console.log("error has occured" , err)
}

finally{

    console.log("this is always run")
}

console.log("... then the exectuion continues")