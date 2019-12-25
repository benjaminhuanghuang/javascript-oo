let x = {} ;
// js engine translate it to 
// let x = new Object();
console.log(x.constructor);

function createCircle(radius){
  return {
    radius,
    draw: function () {
      console.log('draw circle');
    }
  }
}

const circle = createCircle();
console.log(circle.constructor);   // Object()


function Circle(radius){
  this.radius = radius;
  this.draw = function () {
    console.log('draw circle');
  }
}
// Here is the Circle object
console.log(Circle.name);
console.log(Circle.constructor);   // Function()
// js create Circle funcion internally like
Circle1 = new Function('Circle', `
  this.radius = radius;
  this.draw = function () {
    console.log('draw circle');
  }
`)

