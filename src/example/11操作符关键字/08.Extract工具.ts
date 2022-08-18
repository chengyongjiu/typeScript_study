// Extract<T,U> 从 T 可分配给的类型中提取 U  *获取两个类型的交集*

// type Extract<T, U> = T extends U ? T : never;

type E = Extract<string | number|symbol, string|number|Function>;
let e: E = "1";


export {}