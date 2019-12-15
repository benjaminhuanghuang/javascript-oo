function F(){}
var f = new F();

// Constructor
F.prototype.constructor === F;   //true
F.__proto__ === Function.prototype; // true
Function.prototype.__proto__ === Object.prototype; // true
object.prototype.__proto__ === null;

// instance
f.__proto__ === F.prototype;
F.prototype.__proto__ === Object.prototype;
Object.prototype.__proto__ === null;

/* ##########################################
  每个对象都有__proto__属性来标识自己所继承的原型
  只有函数才有prototype属性。
  当你创建函数时，JS会为这个函数自动添加prototype属性，值是空对象。
  
  一旦把这个函数当作构造函数（constructor）调用（即通过new关键字调用），那么JS就会帮你创建该构造函数的实例，
  实例继承构造函数prototype的所有属性和方法（实例通过设置自己的__proto__指向承构造函数的prototype来实现这种继承）
########################################## */

/*
  子类构造函数的 __proto__指向父类构造器，继承父类的静态方法
  子类构造函数的 prototype的 __proto__指向父类构造器的 prototype，继承父类的方法。
  子类构造器里调用父类构造器，继承父类的属性。
*/
