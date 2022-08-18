namespace a {
  //当装饰器作为修饰类的时候，会把构造器传递进去
  function addNameEat(constructor: Function) {
    constructor.prototype.name = "hello";
    constructor.prototype.eat = function () {
      console.log("eat");
    };
  }
  @addNameEat
  class Person {
    name?: string;
    eat!: Function;
    constructor() {}
  }
  let p: Person = new Person();
  console.log(p.name);
  p.eat();
}