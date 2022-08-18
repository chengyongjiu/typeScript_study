class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  getPostion() {
    return `${this.x},${this.y}`
  }
  // 定义静态方法 不用再实例中去找而是类本身带有不需要使用new关键字来实例化类进行调用
  static getClassName() {
    return Point.name
  }
}
// 实例化对象
const p1 = new Point(1, 2)
console.log(p1)
// 调用实例方法
let str = p1.getPostion()
console.log(str)

// 调用静态方法
console.log(Point.getClassName());


var info = {
  _age: 18,
  set age(nawValue) {
    console.log(`你想我年龄是${nawValue}`);
    this._age = nawValue
  },
  get age() {
    console.log('你问我名字干嘛');
    return this._age
  }
}

info.age = 20
console.log(info.age);

class Point1 {
  constructor(x) {
    this.x = x
    // 获取使用new 关键字创建的实例
    console.log(new.target === Point1);
    if (new.target == Point1) {
      throw new Error('不能实例化')
    }
  }
  static getPostion() {
    return `Point1中的getPostion`
  }
  getClassName() {
    console.log(this.name);
  }
}
// 继承子类继承父类的属性使用关键字 extends 来继承
class Child extends Point1 {
  constructor() {
    //! super指向的是父类的构造方法
    super(1)
  }
  // 从写父类中的 getPostion
  static getPostion() {
    //!  在静态方法中super是指向父类的静态属性或者是静态方法
    console.log(super.getPostion());

    return `Child中的getPostion`
  }
  getClassName() {
    //!  在实例方法中super是指向父类的实例属性或者是实例方法
    super.getClassName()
  }

}
// const c= new Point1()
const c = new Child().getClassName()
console.log(Child.getPostion())