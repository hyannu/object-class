/*const student = {
    fulName: "Archana Rao",
    marks: 94.4,
    printMarks: function () {
        console.log("marks = ", this.marks);
    }
}
    */



/*class Person {
    constructor (name) {
        console.log("enter parent constructor");
        this.species = "homo sapiens";
        this.name = name;
    }

eat() {
    console.log("eat");
   }
}

class Engineer extends Person {
    constructor(name){
        super(name); // to invoke parent class constructor
    }
    work() {
        console.log("solve problem, build something");
    }
}

let engObj = new Engineer("Archana Rao");
*/

class ToyotaCar {
    start() {
        console.log("start");
    }
stop() {
    console.log("stop");
}
setBrand(brand) {
    this .brandName = brand;
}
}
let fortuner = new ToyotaCar();
fortuner.setBrand("fortuner");
let lexus = new ToyotaCar();
lexus.setBrand("fortuner");