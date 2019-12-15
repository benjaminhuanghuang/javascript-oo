/*
Prototypes in JavaScript
https://hackernoon.com/prototypes-in-javascript-5bba2990e04b
*/

function Human(firstName, lastName) {
	this.firstName = firstName,
	this.lastName = lastName,
	this.fullName = function() {
		return this.firstName + " " + this.lastName;
	}
}

/*
 every object created using the constructor function will have it’s own copy of properties and methods. 
 It doesn’t make sense
 */
var person1 = new Human("Virat", "Kohli");
var person2 = new Human("Sachin", "Tendulkar");

/*
Human constructor function has a prototype property which points to the prototype object. 
The prototype object has a constructor property which points back to the Human constructor function. 
*/
console.log(Human);


/*
The prototype object has a constructor property which points back to the Human constructor function. 
*/
console.log(Human.prototype);

//Create an object person1 using the Human constructor function
var person1 = new Human("Virat", "Kohli");
/*
  person1 object which is created using the Human constructor function has a __proto__ property 
  which points to the prototype object of the constructor function.
*/
console.log(person1);
Human.prototype === person1.__proto__ //true
/*
Prototype object of the constructor function is shared among all the objects created using 
the constructor function.
*/
var person2 = new Human("Sachin", "Tendulkar");
console.log(person2);
Human.prototype === person2.__proto__ //true
person1.__proto__ === person2.__proto__ //true

/*
As prototype object is an object, we can attach properties and methods to the prototype object. 
Thus, enabling all the objects created using the constructor function to share those properties 
and methods.
*/
//Dot notation
Human.prototype.name = "Ashwin";
console.log(Human.prototype.name)//Output: Ashwin
//Square bracket notation
Human.prototype["age"] = 26;
console.log(Human.prototype["age"]); //Output: 26
console.log(Human.prototype);


//Create an empty constructor function
function Person(){

}
//Add property name, age to the prototype property of the Person constructor function
Person.prototype.name = "Ashwin" ;
Person.prototype.age = 26;
Person.prototype.sayName = function(){
	console.log(this.name);
}
//Create an object using the Person constructor function
var person1 = new Person();
//Access the name property using the person object
console.log(person1.name)// Output" Ashwin

/*
When we try to access a property of an object, JavaScript engines first tries to find the property 
on the object; 
if the property is present on the object it outputs its value. 
But, if the property is not present on the object then it checks tries to find the property on 
the prototype object or dunder proto of the object. 
If the property is found the value is returned else JavaScript engine tries to find the property 
on the dunder proto of the dunder proto of the object. 
This chain continues till the dunder proto property is null. In this cases output will be undefined.
*/