// 定义类
class Point {
  // ? public 修饰符 公共的 外部可以通过类，或者实例访问
  public x: number;
  // ? protected 修饰符 受保护的 只有类本身和子类能够访问
  protected y: number;
  // ? private 修饰符 私有的 只有通过类内部本身可以访问
  private readonly age: number;
  //  在父类中的构造函数前写上 protected 关键字 这这个父类就只能是由子类调用 外部无法实例化父类
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
    this.age = x + y;
  }

  public getPosition() {
    console.log(this.x, this.y, this.age);
  }
}
const point = new Point(456, 123);
// ! console.log(point.age); //报错属性“age”为私有属性，只能在类“Point”中访问。

point.getPosition();
// ! console.log(point.y); //属性“y”受保护，只能在类“Point”及其子类中访问。

// 子类继承父类
class Child extends Point {
  constructor() {
    // 调用super函数
    super(1, 2);
  }

  public getPosition2() {
    // console.log(this.age) //子类中private也是无法访问的
    console.log(this.y, this.x);
  }
}

class UserInfo {
  // readonly 只读属性实例只能读不能修改
  readonly Name: string;
  // static 静态属性 只能是类来访问实例不能访问
  public static age = 18;
  constructor(name: string) {
    this.Name = name;
  }

  // 定义静态方法
  public static getAge() {
    console.log(UserInfo.age);
  }
}
const userinfo = new UserInfo("lison");
// userinfo.age=22 报错因为age是静态属性无法再实例中进行访问
// userinfo.Name='hahha' //无法分配到 "Name" ，因为它是只读属性。
UserInfo.getAge();

class Info {
  public Name: string;
  // 可选参数使用?来修饰，语法：Name?:type 来表示可选
  public Age?: number;
  constructor(name: string, age?: number, public sex?: number) {
    this.Name = name;
    if (age) {
      this.Age = age;
    }
  }

  // 取值器 get
  get infoStr() {
    return `${this.Name}:${this.Age}`;
  }

  // 存值器 set
  set infoStr(value) {
    console.log(`set:${value}`);
  }
}

const info1 = new Info("lison");
const info3 = new Info("lison", 12, 1);

// 设置值的时候调用存值器
info3.infoStr = "haha";

// 读取时调用取值器
console.log(info3.infoStr);

// 抽象类 无法构造实例对象 只能用于被其他类进行继承

abstract class Peoson {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  getNamr() {
    console.log(this.name);
  }
}
// let p=new Peoson() //无法创建抽象类的实例。

class Man extends Peoson {
  constructor() {
    super("张三");
  }
  // abstract只能出现在抽象类中。
  // abstract  yy: string;
}

const m = new Man();
m.getNamr();

// 创建包含抽象属性,抽象存储器，抽象方法的抽象类
abstract class adPeoson {
  abstract Name: string;
  abstract getinfo(): string;
  protected abstract _age: number;
  abstract get Age(): number;
  abstract set Age(value: number);
}
// 继承并且实现抽象类中的抽象方法
class AdPeoson extends adPeoson {
  Name: string;
  _age: number;

  constructor(name: string) {
    super();
    this._age = 0;
    this.Name = name;
  }

  get Age(): number {
    return this._age;
  }

  set Age(value: number) {
    this._age = value;
  }

  getinfo(): string {
    return `${this.Name}:${this.Age}`;
  }
}
const adp = new AdPeoson("张三");
adp.Age = 18;
console.log(adp.Age);
console.log(adp.getinfo());

// 使用接口来规定class
interface INfoPoson {
  Name: string;
  Age: number;
  Heigth: number;
  getInfo(): string;
}

class Poson implements INfoPoson {
  Name: string;
  Age: number;
  Heigth: number;
  constructor(Name: string, age: number, Heigth: number) {
    this.Name = Name;
    this.Age = age;
    this.Heigth = Heigth;
  }

  getInfo(): string {
    return `姓名：${this.Name}\n年龄：${this.Age}\n身高：${this.Heigth}`;
  }
}

const P = new Poson("张三", 18, 1.77);

console.log(P.getInfo());


export default {}