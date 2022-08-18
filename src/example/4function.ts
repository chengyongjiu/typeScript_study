
function add1(arg1:number,arg2:number):number{
  return arg1+arg2
}
add1(1,2)

// 定义函数接口
//? 普通函数接口
interface AddFunction{
  (num1:number,num2:number):number
}
const AddFunction:AddFunction=(a,b)=>{
  return a+b
};
//? 获取剩余参数

interface AddFunctionArr{
  ():void,
  count:number
}

interface AddFunction2{
  (num1:string,...num2:number[]):AddFunctionArr
}

const AddFunction2:AddFunction2=(a:string,...b:number[])=>{
  const c=()=>{
    console.log(a,b);
    c.count++
  }
  c.count=0
  return c
};
const countitem:AddFunctionArr= AddFunction2('edit',2,3,4,5,5);
countitem()
console.log(countitem.count);
countitem()
console.log(countitem.count);
countitem()
console.log(countitem.count);
countitem()
console.log(countitem.count);

// 函数重载

function handleDate(x:string):string[];
function handleDate(x:number):number[];

function handleDate(x:unknown):unknown[] {
  if (typeof x==='string') {
    return [x]
  }else {
    return [x]
  }
}
const a=handleDate(123456)[0]
console.log('%c [ a ]-56', 'font-size:13px; background:pink; color:#bf2c9f;', a)
const b=handleDate("123456")[0]
console.log('%c [ b ]-58', 'font-size:13px; background:pink; color:#bf2c9f;', b)





export default {}


