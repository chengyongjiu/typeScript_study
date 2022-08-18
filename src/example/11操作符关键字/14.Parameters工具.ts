// Parameters 该工具类型主要是获取函数类型的参数类型 获得的类型为元组类型
type T1=Parameters<()=>string>
type T2=Parameters<(arg1:string,arg2:number)=>string>
type T3=Parameters<(arg1:string,arg2:number,arg3:Function,...arg:number[])=>void>
let t2:T2=['abc',2]
let t3:T3=['abc',2,()=>{},...[1,2,3]]
    t3=['abc',2,()=>{},2,4,5,6,7,8,]
export default {}