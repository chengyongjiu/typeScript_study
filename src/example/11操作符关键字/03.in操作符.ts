// 映射类型 in
interface Info1 {
  name: string
  age: number
  height: number
}

/**
   * 使用keyof 操作符进行对键名进行循环遍历 
   * 使用in 操作符进行映射类型 
   * 使用[] 索引访问操作符 来访问T中索引的属性
  */
type ReadonlyPrson<T> = {
  readonly [P in keyof T]?: T[P]
}

type ReadonlyInfo1 = ReadonlyPrson<Info1>

let Info11: ReadonlyInfo1 = {
  age: 18,
  name: 'cyj',
  height: 1.73
}
// Info11.age=20 报错 age为只读属性
export default {}