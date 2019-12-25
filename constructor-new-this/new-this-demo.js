/*
Object-oriented Programming in JavaScript: Made Super Simple | Mosh
https://www.youtube.com/watch?v=PFmuCDHHpwk&t=1609s


new keyword does:
  1. Create an empty object
  2. make 'this' point to this empty object for setup
  3. return this object
*/

// Factory Function
function createCircle(radius){
  return {
    radius,
    draw: function () {
      console.log('draw circle');
    }
  }
}

const circle = createCircle();


// Constructure function 大写首字母,暗示这是一个class
function Circle(radius){
  console.log('this ', this);
  // this points to the the context object
  this.radius = radius;
  this.draw = function () {
    console.log('draw circle');
  }
}

// Call Constructure function without 'new', 
// 此时Constructure function就是一个普通的function，this 指向 global/window
const other = Circle();

// new keyword creats an empty object and make this point to this empty object
// like Circle.call({}, 1)
const other2 = new  Circle(1);