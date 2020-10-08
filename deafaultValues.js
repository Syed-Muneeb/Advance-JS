// console.log("hello")

// function welcomeMsg (name = "everyone"){

//     let msg = `welcome ${name}`;
//     console.log(msg)
// }

// welcomeMsg("azfar");
// welcomeMsg();

function createIcreame ({scoops = 1, toppings = ["Dark Chocolate"]} = {}) {

        let scoopText = scoops === 1 ? "Scoop" : "scoops";
        console.log(`your sundae has ${scoops} ${scoopText} with ${toppings.join(' and ')} toppings`);
}

// createIcreame({})
// createIcreame({ scoops : 2 })
// createIcreame({ scoops : 2 , toppings : ["sprinkes", "smarties"]})
// createIcreame({ toppings : [ "strawberry" ]})
createIcreame() // crash

// var var1 = "string";

// let split = var1.split("");
// console.log(split)

// let join = split.join("");
// console.log(join)