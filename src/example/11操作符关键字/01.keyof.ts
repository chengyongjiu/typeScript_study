//FIXME 高阶方法

// ! keyof 可以用来取得一个对象接口的所有 key 值
interface interfaceAdvanced {
  name: string,
  age: number,
  gender: 'male' | 'female'
}

let infoProp: keyof interfaceAdvanced //* infoProp='name'| 'age'|'gender'
infoProp = 'name'
infoProp = 'age'
infoProp = 'gender'
// infoProp='sex' //bug 不能将类型“"sex"”分配给类型“keyof interfaceAdvanced”。


/**
 * 泛型进行约束
 * 使用keyof 将泛型中的键名提取出来 形成 类型接口
 * 使用extebds对泛型进行约束
 *  */

function getValue<T, K extends keyof T>(obj: T, names: K[]): Array<T[K]> {
  return names.map(n => obj[n])
}
const val = getValue({ name: "hello", age: 10, gender: "male" }, ["age", 'gender'])
console.log(val) // [10, 'male']

export default { }