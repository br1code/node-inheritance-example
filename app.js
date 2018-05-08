const EventEmitter = require("events");
const util = require("util");

// util.inherits example --------------------------

function Greetr() {
    this.greeting = "Hello friend!";
}

util.inherits(Greetr, EventEmitter);

Greetr.prototype.greet = function(data) {
    console.log(this.greeting + ": " + data);
    this.emit("greet", data);
}

var greeter1 = new Greetr();

greeter1.on("greet", function(data) {
    console.log("Someone greeted!: " + data);
});

greeter1.greet("Bruno");

// ES6 example ----------------------------------

class Greetr2 extends EventEmitter {

    constructor() {
        super();
        this.greeting = "Hello friend!";
    }

    greet(data) {
        console.log(this.greeting + ": " + data);
        this.emit("greet", data);
    }
}

const greeter2 = new Greetr2();

greeter2.on("greet", (data) => {
    console.log(`Someone greeted!: ${data}`);
});

greeter2.greet("Bruno");