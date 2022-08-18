// 在有条件类型的 extends 子语句中，允许出现 infer 声明，它会引入一个待推断的类型变量。 这个推断的类型变量可以在有条件类型的 true 分支中被引用。


type Type1<T>=T extends Array<infer U> ? U : T

type test1=Type1<Array<string|number>>

type ProsonFunInfer<T extends (...arg: any) => any> = T extends (...arg: any) => infer R ? R : any
// T extends (...args: any) => any 这一行代码就是约束传入 ProsonFunInfer 的泛型参数类型必须是函数类型，这就类似于参数校验。这里的 T 就是 add 函数的类型 (x: number, y: number) => number 。
// 那么 T extends (...args: any) => infer R ? R : any 代码的含义可以理解为：如果 T (x: number, y: number) => number 满足于 (…args: any) => infer R 的表现形式的话，就返回 R，否则返回 any 。
// infer R 表示声明一个待推断的类型，并将推断出来的类型存储在 R 中。这里 T 是 (x: number, y: number) => number ，infer R 被放在 (...args: any) => infer R 函数类型的返回值处，因此推断出了 number 类型并赋值给 R 。

// 定义一个函数返回一个对象
function ProsonFn(heigth:number,address:string) {
  return { name: '张三', id: '001', age: 15 }
}
// 使用typeof 将普通对象转变为类型别名
const aaa={
  size: 18
}
type c = typeof aaa;
// 使用typeof 将函数转变为类型别名
type a=typeof ProsonFn


type T1=ProsonFunInfer<a> //得到类型为函数返回值类型

// 使用infer关键字返回一个函数参数类型

type ParamsType<T extends (...arg:any)=>any>=T extends (...arg:infer R)=>any ? R : any

type b=typeof ProsonFn
//获得元组类型的类型别名
type T2=ParamsType<b> 
let t2:T2=[1.85,'beijing']



export {}
