interface Proson{
  name:string,
  Age:number,
  Height:number
}
// Readonly 操作符转换为只读属性
type ReadonlyProson=Readonly<Proson>

let proson:ReadonlyProson={
  name: "张三",
  Age: 18,
  Height: 1.85
}
console.log(proson);

// proson.Age=20  //error 无法分配到 "Age" ，因为它是只读属性。

export default {}

