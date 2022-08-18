enum Status{
  Uploading,
  Success,
  Failed
}
// 默认值为 从0 开始
console.log(Status.Uploading); // 0
console.log(Status.Success); // 1


// 指定初始值
enum Status1{
  Uploading=5,
  Success=8,
  Failed
}
console.log(Status1.Uploading); // 5
console.log(Status1.Success); // 8
console.log(Status1.Failed); // 9

// 使用计算值作为初始值后面的值必须要指定初始值
let testCount=0
const getCount=()=>{
  return testCount++
}
enum Status3{
  Uploading=getCount(),
  Success=0, //! 报错 枚举成员必须具有初始化表达式。
  Failed
}
console.log(Status3.Uploading); // 5
console.log(Status3.Success); // 8
console.log(Status3.Failed); // 9

// 也可通过索引来取键名

enum Status4{
  Uploading,
  Success,
  Failed
}
console.log(Status4[0]); //*Uploading
console.log(Status4[1]); //*Success
console.log(Status4[2]); //*Failed

// 字面量枚举
// !字面量枚举不可以用值反推出键名 
enum Massage{
  Error='Sorry,Error',
  Success='Hello Success',
  Failed=Error // ! 可以使用自身枚举key来作为值表示
}
console.log(Massage.Error); // ?Sorry,Error


// 异构枚举 既有数字枚举又有字面量枚举
// ! 除非很需要这种枚举类型否则不建议使用
enum Result{
  Faild=0,
  Success='success'
}

// 枚举成员类型
enum Animals {
  Dog=1,
  Cat=2
}

interface Dog{
  type:Animals.Dog
}
const dog:Dog={
  type:Animals.Dog
}
// 联合枚举类型
enum Status5 {
  Off,
  On
}
interface Light{
  status:Status5
}

const light:Light={
  // status: Status5.On,
  status: Status5.Off
  // status: Animals.Dog //不能将类型“Animals.Dog”分配给类型“Status5”
}
// 编译时只会将这个枚举编译为普通数字或者是字符串 其他枚举编译后为对象
const enum Animals1{
  Dog=1
} 
Animals1.Dog //编译后 1


export default {}

















