## Reference
[Inheritance and the prototype chain] (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)

所有实例对象需要共享的属性和方法，都放在prototype对象里面；那些不需要共享的属性和方法，就放在构造函数里面。
实例对象一旦创建，将自动引用prototype对象的属性和方法。

每个object都有一个私有属性 "__proto__" 指向它的构造函数的原型对象（prototype ）。该原型对象也有一个自己的原型对象( __proto__ ) ，层层向上直到一个对象的原型对象为 null。根据定义，null 没有原型，并作为这个原型链中的最后一个环节。