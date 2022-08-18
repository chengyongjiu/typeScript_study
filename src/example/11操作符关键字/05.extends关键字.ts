

// 用于接口，表示继承
interface T1 {
  name: string,
}

interface T2 {
  sex: number,
}

/**
 * @example
 * T3 = {name: string, sex: number, age: number}
 */
interface T3 extends T1, T2 {
  age: number,
}

// 表示条件类型，可用于条件判断
/**
 * @example
 * type A1 = 1
 */
type A1 = 'x' extends 'x' ? 1 : 2;

/**
 * @example
 * type A2 = 2
 */
type A2 = 'x' | 'y' extends 'x' ? 1 : 2;

/**
 * @example
 * type A3 = 1 | 2
 */
type P<T> = T extends 'x' ? 1 : 2;
type A3 = P<'x' | 'y'>
// 如果用于简单的条件判断，则是直接判断前面的类型是否可分配给后面的类型
// 若extends前面的类型是泛型，且泛型传入的是联合类型时，则会依次判断该联合类型的所有子类型是否可分配给extends后面的类型（是一个分发的过程）。

// 有时候我们定义的泛型不想过于灵活或者说想继承某些类等，可以通过 extends 关键字添加泛型约束。

interface lengthwise {
  length: number
}
function lodingIn<T extends lengthwise>(params: T) {
  console.log(params);
}
lodingIn({ length: 12, value: '哈哈哈哈' })
