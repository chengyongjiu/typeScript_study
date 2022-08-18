// Exclude<T,U> 从 T 可分配给的类型中排除 U

type Types=string|number|symbol|undefined|null

type types2=string|undefined|symbol|Function

// 剔除Types 中包含type2的类型
type ExcludeTypes=Exclude<Types,types2>
let a:ExcludeTypes=null
a=12

// a='abc' 报错
export default {}