
    /// function constructor

// function Hello(name,age){

//     this.name = name;
//     this.age = age
// }

// Hello.prototype.skills = "reactjs"
// Hello.prototype.print = () => {

//         console.log("hello world")
// }

// let hi = new Hello("syed",18);
// console.log(hi)

    // classes

class Car {

    constructor(model,engine,color,year){

        this.model = model;
        this.engine = engine;
        this.color = color;
        this.year = year
    }

    carColor () {

        console.log(`the color is ${this.color}`)
    }
}

// const corollaGLI = new Car('GLI', 1300, "white", 2020);
// const corollaGrand = new Car('Grande', 1600, "black", 2020);

// console.log(corollaGLI);
// console.log(corollaGrand);

// corollaGrand.carColor();
// corollaGLI.carColor();


class Dealer extends Car{
    
    constructor(name,address,model,engine,color,year) {
        super(model,engine,color,year);

        this.name = name;
        this.address = address;
    }

    changeColor () {

        this.color = "black";
    }
    static value = "some static value"
    static printName = () => {

        console.log(this.name);
    }
}

let dealer1 = new Dealer("Haseeb Motors", "KHI", "XLI", 1300, "grey",2020);
console.log(dealer1)
dealer1.carColor() 
dealer1.changeColor()

console.log(Dealer.value)

Dealer.printName()