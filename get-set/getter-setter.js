function Circle(radius) {

  this.radius = radius;
  // internal property. Can not read as an object peroperty
  let _defaultLocation = { x: 0, y: 0 };

  Object.defineProperty(this, 'defaultLocation', {
    get: function () {
      return _defaultLocation;
    }
  });
}


const circle = new Circle();
circle.defaultLocation = 10;    // Does NOT work
console.log(circle.defaultLocation.x)