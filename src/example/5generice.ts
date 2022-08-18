// 泛型

// const getArray=(value:any,times:number):any[]=>{
//   return new Array(times).fill(value)
// }

// console.log(getArray(2,3)[0]); //往后点不会有任何提示和也不会报错在项目中是很危险的事



//使用泛型定义 我们传入什么类型就会被这个T就会推断出类型
// const getArray=<T>(value:T,times:number):T[]=>{
//   return new Array(times).fill(value)
// }
// console.log(getArray('A',3)[0])

// 多个泛型变量定义
// const getArray=<T,U>(param1:T,param2:U,time:number):[T,U][]=>{
//   return new Array(time).fill([param1,param2])
// }
// getArray(1,'a',3).forEach(item=>{
//   console.log(item[0].toFixed());
//   console.log(item[1]);
// })

// 定义泛型函数
let getArray: <T>(arg: T, times: number) => T[];
getArray = (arg: any, times: number) => {
  return new Array(times).fill(arg)
}
// getArray(123,3).map(item=>item.length) 报错 number 类型没有length属性

//类型别名定义泛型函数
type TypeArray = <T>(arg: T, times: number) => T[]
let TypeArray: TypeArray = (arg: any, count: number) => {
  return new Array(count).fill(arg)
}
TypeArray(true, 3)

//接口定义泛型函数
interface InterArray<T> {
  (arg: T, times: number): T[],
  // arrayT:T[]
}
let arrTfn = (arg: any, times: number): InterArray<any> => {
  console.log(arg, times, 'qqqqq');

  let c: InterArray<any> = (x: any, s: number) => {
    return new Array(s).fill(x)
  };
  return c
}
let arrayT = arrTfn(5, 20)
console.log(arrayT(7, 5));

// 泛型也约束
interface isLength {
  length: number
}
// 使用extends关键字进行约束泛型T必须要有length属性才能传如
const getArray2 = <T extends isLength>(arg: T, times: number) => {
  return new Array(times).fill(arg)
}
// getArray2(123,2) //报错数字123没有length属性

let objlen = {
  0: 1,
  1: 2,
  length: 2
}
getArray([1, 'a', true], 2)
getArray(objlen, 2)
// 定义一个函数来返回传入对象中的某个value 
// keyof 可以理解为T类型中的键组合成的联合类型
const getProps = <T, K extends keyof T>(obj: T, propName: K) => {
  return obj[propName]
}
const objs = {
  a: 'a',
  b: 'b'
}

getProps(objs, 'b')
// getProps('abc','b') //报错
// getProps(objs,'c') 报错 类型“"c"”的参数不能赋给类型“"a" | "b"”的参数


export default {}















