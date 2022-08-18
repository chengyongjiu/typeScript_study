// NonNullable 从 T 中排除 null 和 undefined
/**
 * T extends null | undefined ? never : T 
 * null | undefined ? never : T  类似三元运算符 如果是null或者是undfing类型就返回never类型否则就是返回T类型
 * extends 关键字会将never类型的变量过滤掉所以就将泛型T中的变量过滤掉
 */
// type NonNullable<T> = T extends null | undefined ? never : T;

type E = NonNullable<string | number | null | undefined|Function>;
// let e: E = null; //报错 error
let e:E='123'
export default {}
