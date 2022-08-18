interface interfaceAdvanced {
  name: string,
  age: number,
  gender: 'male' | 'female'
}

/**
 * [] 索引访问操作符
 * 使用 [] 操作符可以对接口或者是类型别名进行索引访问 获得他的类型
 */
 type typeAdvanced = {
  age: number,
  name: string,
  height: number
}
type NameType = interfaceAdvanced['name'] //! type NameType = string
type NameType1 = typeAdvanced['height'] //! type NameType1 = number

interface Objs<T> {
  name:string
  [key: number]: T
}
// 使用keyof进行访问类型索引类型
let keys: keyof Objs<string>='name'
// 使用[]索引访问操作符 访问索引所对应的类型
let keys1: Objs<symbol>['name']

interface Type {
  a: null;
  b: undefined;
  c: string;
  d: never;
  e: number;
  f: symbol;
  g: Function;
  h: object;
}

type Test = Type[keyof Type] //非 never 类型组成的联合类型

export default {}