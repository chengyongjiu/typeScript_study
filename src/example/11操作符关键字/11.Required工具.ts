
//Required Required 可以将传入的属性中的可选项变为必选项，这里用了 -? 修饰符来实现。
interface Person {
  name: string;
  age: number;
  gender?: "male" | "female";
}
/**
 * type Required<T> = { [P in keyof T]-?: T[P] };
 */
type P = Required<Person>
let p: P = {
  name: "hello",
  age: 10,
  gender: "male",
};
// Required使用的是-?修饰符来完成
type P2<T>={
  [P in keyof T]-?:T[P]
}
let p2: P2<Person> = {
  name: "Tom",
  age: 10,
  gender: "female",
};
export default {}