// constructor function
let Car = function (color, model) {
    this.color = color;
    this.model = model;
}

// prototype inheritance 
// prototype methods will be abailable on every instances of Car object
Car.prototype.startEngine = () => {
    console.log("Engine started.. ")
}

let instance = new Car('black', 2023)
let instance2 = new Car('pink', 2003)
// console.log(instance2 instanceof Car) // check instance or not

// console.log(Car.prototype)
// console.log(instance, instance2)
// console.log(instance.__proto__)
// instance.startEngine()


// Class
class Students {
    // constructor
    constructor(roll, name, marks) {
        this.roll = roll
        this.name = name
        this.marks = marks
    }
    // class methods
    markSheet() {
        console.log(`This is a marksheet of roll number ${this.roll} and name ${this.name}`)
    }

    // accessor methods / properties
    get _percentage() {
        return Math.round(this.marks / 7)
    }
    set rollNumber(roll) {
        this.roll = roll
    }
}

let student1 = new Students(1, 'Saniyaj', 500)
let student2 = new Students(2, 'Shubha', 390)
console.log(student1)
// console.log(student1.markSheet())
// console.log(student2.markSheet())

let prstg = student2._percentage
student1.rollNumber = 5
// console.log(student1)
// console.log(prstg)



// child classes // inheritance
class Courses extends Students {
    constructor(roll, name, marks, className, subject) {
        super(roll, name, marks) //set the arguments to the parent class
        this.className = className
        this.subject = subject
    }
}
let student3 = new Courses(2, 'rohit', 388, 'Five', 'Math')
console.log(student3)

























