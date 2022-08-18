let mergeFunc = <T, U>(arg1: T, arg2: U): T & U => {
  let res = {} as T & U
  res = Object.assign(arg1, arg2)
  return res
}
  console.log(mergeFunc({a:'a'},{b:"b"})); // {a: 'a', b: 'b'}

// ? 类型保护
const getRandomValue=()=>{
  let item=Math.random()*10;
  if (item>5) {
    return 'abcd'
  } else {
    return 4
  }
}
const item=getRandomValue()

//? typeof 类型保护 类型只能是 string number boolean symbol 类型 ，并且只能使用=== 号来作为比较条件
if (typeof item==='string') {
  console.log(item.length);
} else {
  console.log(item.toFixed());
}


//? 使用  instanceof 进行类型保护 
class CreatedByClass1{
  public age=18
  constructor(){}
}

class CreatedByClass2{
  public age=18
  constructor(){}
}

function getRandomItem() {
  return Math.random()<0.5 && new CreatedByClass1() || new CreatedByClass2()
}
const item1=getRandomItem()
if (item1 instanceof CreatedByClass1) {
  console.log('CreatedByClass1');
  
} else {
  console.log("CreatedByClass2");
  
}

//? 自定义类型保护
function isString(params:string|number):params is string {
  return typeof params==='string'
}

if (isString(item)) {
  console.log(item.length);
  
} else {
  console.log(item.toFixed());
  
}

// 泛型类型别名 type Name<T>={x:T}
type Name<T>={x:T}
const postion1:Name<number>={
  x:3
}

const postion2:Name<string>={
  x:'abc'
}

//? 定义嵌套类型别名
type Childs<T>={
  current:T,
  childs?:Childs<T>
}

let ccc:Childs<string>={
  current:'first',
  childs:{
    current:'second',
    childs:{
      current:'third'
    }
  }
}

// type Childs1 = Childs1[Childs1] //error 类型别名“Childs1”循环引用自身。

//? 为接口起类型别名时不能使用 extends implements 

// 
/**
 * @description 枚举成员类型
 * 1.值为字符串字面量
 * 2.不带初始值的枚举成员
 * 3.值为数值字面量，或者是值为带有-号的字面量
 * @description 满足任意一个都可以作为类型来使用
 * */

//? 可辨识联合
/**
 * 1.要具有普通的单例类型属性
 * 2.一个类型别名中包含了那些类型属性
 */

interface Square{
  kind:'square'
  size:number
}

interface Rectangle{
  kind:'rectangle'
  width:number
  heigth:number
}

interface Circle{
  kind:'circle'
  redius:number
}

type Shape=Square | Rectangle | Circle
function assertNever(value:never):never {
  throw new Error('Unexpeted object:'+value)  
}
function getArea(s:Shape) {
  switch (s.kind) {
    case 'square':
      return s.size*s.size
      break;
    case 'rectangle':
      return s.heigth*s.width
      break;
      case 'circle':
      return Math.PI*s.redius**2
      break;
    default:
      assertNever(s)
      break;
  }
}

export default {}



