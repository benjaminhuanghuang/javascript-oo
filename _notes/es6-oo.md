## Constructor, Properties and Methods
Constructor is just a function which gets called automatically when we create an instance from the class.

Instance variables get created and initialized using constructor.

Methods are again functions which attached with instance and all instance created from the same class will have those methods or actions.

Accessing properties and methods inside class, we need **this** keyword.

## Static Properties and Methods
Each instance of the class will have its own properties which gets created at constructor but Class can have also it’s own properties.

The class only properties are called Static Properties.

We can put label as static in-front of methods and properties inside the class definition to make it accessible to class only OR we can add it later to the class as well like Meetup.getMembers = function()

## Getter and Setter


## Inheritance in ES6
Inside constructor function of child class , we have to call super() method to call the parent constructor first otherwise JavaScript will throw error.

super() method constructor function of Parent class.
super() call is must in constructor of derived class whether explicit presence of parent constructor exists or not.

Child class can access the methods of parent class using super object like super.organise().