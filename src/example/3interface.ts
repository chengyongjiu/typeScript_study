// 创建普通函数
// const getFullName=({firsName,lastName})=>{
//   return `${firsName} ${lastName}`
// };

interface Nameinfo{
  firsName:string,
  lastName:string
}
// 创建接口定义函数
const getFullName=({firsName,lastName}:Nameinfo):string=>{
  return `${firsName} ${lastName}`
};
getFullName({
  firsName:'张',
  lastName:'三'
})

// 可选属性
interface Vegetable{
  color?:string, // Name?:type 代表可选的可传可不传
  type:string,
  [prop:string]:unknown // 超出接口定义的参数会报错用这个索引签名来让接口参数可以超出
}

const getVegetables=({color,type}:Vegetable)=>{
  return `A ${color || ''} ${type}`
}
console.log(getVegetables({type:'tomato',color:"red",size:2}));

// 只读属性

interface Vegetable1{
 readonly type:string
color:string
}
const Vegetable1obj:Vegetable1={
  type:'tomato',
  color:'red'
}
//! Vegetable1obj.type="carrot" //无法分配到 "type" ，因为它是只读属性。
Vegetable1obj.color='#000'

// 定义数组结构
interface ArrInter{
  0:number,
 readonly 1:string
}
const arr:ArrInter=[1,'a']
//! arr[1]='b' 无法分配到 "1" ，因为它是只读属性。

// 定义函数

interface addFunc{
  (num1:number,num2:number):number
}

const add:addFunc=(n1,n2)=>{
  // return `${n1}${n2}` 不能将类型“string”分配给类型“number”。
  return n1+n2
}
// 接口继承 子接口可以继承父类接口拥有父类接口的属性自身无需定义
// *父类接口
interface Vegetables{
  color:string
}
//? 子类继承
interface Tomato extends Vegetables {
  radius:string
}
interface Carrot extends Vegetables{
  length:number
}
//! 实现子类接口
const tomato:Tomato={
  radius:'1',
  color:'red'
}
const carrot:Carrot={
  length:1,
  color:'red'
}
// 混合类型接口
interface Counter{
  ():void, //定义函数
  count:number
}
//? 函数返回一个 Counter类型的一个混合接口对象
const getCounter=():Counter=>{
  const c=()=>{c.count++}
  c.count=0
  return c
}
const counter:Counter=getCounter()
counter()
console.log(counter.count);
counter()
console.log(counter.count);
counter()
console.log(counter.count);
counter()
console.log(counter.count);
counter()
console.log(counter.count);

export default {}