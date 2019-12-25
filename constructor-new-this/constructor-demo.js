/*
The constructor method is a special method for creating and initializing an object created within a class.
Constructors are like regular functions, but we use them with the "new" keyword. 
There are two types of constructors: 
  - native (aka built-in) constructors like Array and Object, which are available automatically in the execution environment 
at runtime; 
  - and custom constructors, which define properties and methods for your own type of object.
A constructor is useful when you want to create multiple similar objects with the same properties and methods
*/

/* #################################### 
What is a constructor? 
  It's an ordinary function that is used with the new operator to produce a specialized type of object.
#################################### */
function Color(r, g, b) {
    this.r = r;
    this.g = g;
    this.b = b;
  }
  
  // `Color` is a constructor
  var red = new Color(255, 0, 0);
  
  
  /*####################################
    How constructor works
    
      when the constructor is invoked by new, the constructor's this is set to the object that new will return.
  ####################################*/
  
  /*####################################
    why would we use a constructor? 
  ####################################*/
  // 1. using a constructor means that all of these objects will be created with the same basic structure
  
  // 2. Second, using a constructor means that the object is explicitly marked as an instance of 
  var blue = { r: 255, g: 0, b: 0 };
  
  console.log(red instanceof Color);  // Outputs: true
  console.log(blue instanceof Color);  // Outputs: false
  
  // 3. using a constructor means that we can easily assign specialized methods to the constructor's prototype
  function Color(r, g, b) {
    this.r = r;
    this.g = g;
    this.b = b;
  }
  
  Color.prototype.getAverage = function () {
    var total = this.r + this.g + this.b;
    var avg = total / 3;
    return parseInt(avg, 10);
  };
  
  var red = new Color(255, 0, 0);
  var white = new Color(255, 255, 255);
  
  // Outputs: 85
  console.log(red.getAverage());
  
  // Outputs: 255
  console.log(white.getAverage());
  
  
  /*
  It is considered good practice to name constructor functions with an upper-case first letter.
  */
  
  function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
  }
  
  /*
  All object instances have a constructor property that point to the constructor function that created it.
  */
  
  function Book() { 
    // unfinished code
  } 
  var myBook = new Book();
  
  myBook.constructor == Book;   // true
  var s = new String("text");
  s.constructor === String;      // true
  
  "text".constructor === String; // true
  
  var o = new Object();
  o.constructor === Object;      // true
  
  var o = {};
  o.constructor === Object;      // true
  
  var a = new Array();
  a.constructor === Array;       // true
  
  [].constructor === Array;      // true
  
  
  /*
  ES6
  */
  
  class Rectangle {
    constructor(height, width) {
      this.name = 'Rectangle';
      this.height = height;
      this.width = width;
    }
    sayName() {
      console.log('Hi, I am a ', this.name + '.');
    }
    get area() {
      return this.height * this.width;
    }
    set area(value) {
      this.height = this.width = Math.sqrt(value);
    }
  }
  
  class Square extends Rectangle {
    constructor(length) {
      this.height; // ReferenceError, super needs to be called first!
  
      // Here, it calls the parent class' constructor with lengths
      // provided for the Rectangle's width and height
      super(length, length);
  
      // Note: In derived classes, super() must be called before you
      // can use 'this'. Leaving this out will cause a reference error.
      this.name = 'Square';
    }
  }