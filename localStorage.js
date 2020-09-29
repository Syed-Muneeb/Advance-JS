
localStorage.setItem("fname","Syed");
localStorage.setItem("lname","Muneeb")

let fname = localStorage.getItem("fname");
let lname = localStorage.getItem("lname");

// localStorage.removeItem("fname");

// localStorage.clear()

    /// pass the obj by convert into stringify

localStorage.setItem("obj",JSON.stringify({

    name : "syed Muneeb",
    age : 18

}))

    /// get the data convert back in to object 
    
console.log(localStorage.getItem("obj"))
var user = JSON.parse(localStorage.getItem("obj"));
console.log(user)
