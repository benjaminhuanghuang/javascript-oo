# javascript-oo


## Reference
- [JavaScript OOP Crash Course (ES5 & ES6)](https://www.youtube.com/watch?v=vDJpGenyHaA)

- [Prototypes in JavaScript](https://medium.com/better-programming/prototypes-in-javascript-5bba2990e04b?)

- [JavaScript — Object Oriented Programming using ES6](https://codeburst.io/javascript-object-oriented-programming-using-es6-3cd2ac7fbbd8)

- [JavaScript — all about "this" keyword](https://codeburst.io/all-about-this-and-new-keywords-in-javascript-38039f71780c)


## Difference between __proto__ and prototype
**__proto__** is the actual object that is used in the lookup chain to resolve methods. 
It is a property that all objects have. This is the property which is used by the JavaScript engine for inheritance. 
According to ECMA specifications it is supposed to be an internal property, however most vendors allow it to be accessed and modified.

**prototype** is a property belonging only to functions. It is used to build __proto__ when the function happens to be used as a constructor with the **new** keyword


## Interview Questions
- [面试官问：JS 的继承](https://segmentfault.com/a/1190000018221673)
