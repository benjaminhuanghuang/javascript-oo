var Person = function () { };

// Static method 
Person.say = function () {
    console.log('I am a Person,I can say.')
};

// Static variable shared by all instances
Person.staticProperty = "Person static";

// Instance method
Person.prototype.getName = function (name) {
    console.log('My name is ' + name);
}


Person.say();
console.log(Person.staticProperty);   // undefined
//Person.getName('Carl');   // Person.getName is not a function

var carl = new Person;
//carl.say(); //carl.say is not a function
carl.getName('Carl');
console.log(carl.staticProperty);   // undefined
