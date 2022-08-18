// 布尔类型 定义
const bool = true;
// number类型 定义
const num = 123;
// 字符串类型 定义
let str = 'abc'
str = `数值是${num}`
// 数组类型
// 写法一
let arr1: number[];
arr1 = [1, 2, 3];
// 写法2
let arr2: Array<number>;
// 写法3 组合类型
let arr3: (string | number)[]
// 写法4 组合类型
let arr4: Array<number | string>;

// 元组类型
let tuple: [string, number, boolean]
tuple = ['a', 1, false]

// 枚举类型 不定义值从零开始排序,定义了值就后面的未定义就往后加一
enum Roles {
  SUPER_ADMIN = 3,
  ADMIN = 4,
  USER
}
console.log(Roles.SUPER_ADMIN)

// any类型 全部类型
let value: any;
value = 'abc';
value = 123;
value = false;

// void类型 没有值 一般作为没有返回值的函数类型

const constext = (texte: string): void => {
  console.log(texte)
}
let v: void;
v = undefined;

// null和undefined 可以作为类型也可以作为值
let u: undefined;
u = undefined;
// u=123 报错不能将类型“123”分配给类型“undefined”
let n: null;
n = null
// n='abc' 报错

//  never类型不可能有返回值，他可以赋值给任意类型但是他不可以接收除了naver的以外的类型

const errFunc = (message: string): never => {
  throw new Error(message);
}

const infiniteFunc = () => {
  while (true) { }
}

// object 类型 引用类型
let obj: object;
const obj2 = {
  name: 'L'
};
obj = obj2
obj2.name = 'M'
console.log(obj)
// obj=123  报错不能将类型“number”分配给类型“object”

// 类型断言 语法1: (<string> target) 语法2:(target as string)

const getLength = (target: string | number): number => {
  if ((<string>target).length || (target as string).length === 0) {
    return (target as string).length
  }
  else {
    return target.toString().length
  }
}

export default {}








