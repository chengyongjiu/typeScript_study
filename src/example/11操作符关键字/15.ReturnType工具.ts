// ReturnType infer 最早出现在此 PR 中，表示在 extends 条件语句中待推断的类型变量 

function getUserInfo() {
  return { name: "hello", age: 10 };

}

type UserInfo = { 
  [p in keyof ReturnType<typeof getUserInfo>]: ReturnType<typeof getUserInfo>[p]
};
// 可见 该工具类型主要是获取函数类型的返回类型
const userA: UserInfo = {
  name: "hello",
  age: 10,
};

let a={
  name:'张三',
  age:18,
  sex:'男'||'女'
}
type Type=typeof a

type Type1<T,K extends  keyof T,V>={
  [P in keyof T]: P extends K ? V: T[P]
}
type Type2=Type1<Type,"sex",'男'|'女'>
export {}