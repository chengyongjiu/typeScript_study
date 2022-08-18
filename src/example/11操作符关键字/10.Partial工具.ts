interface Proson{
  readonly name:string
  readonly age:number
  readonly heigth:number
}
// Partial 关键字将 必选的类型转变为可选类型
type PartialProson=Partial<Proson>

let proson:PartialProson={
  age:18
}
// 与上方 Partial 关键字类似
type PartialProson2<T>={
  [P in keyof T]?:T[P]
}
let proson2:PartialProson2<Proson>={
  age:18
}

export default {}