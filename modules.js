function sayHello() {
    console.log("Hello Good Morning");
}

const person = {
    name : 'Javid',
    place : 'Malappuram',
    greet : function() {
        console.log(`I am ${this.name} from ${this.place}`);
    }
}

// if we have multiple item to export
module.exports = {
    sayHello,
    person
}