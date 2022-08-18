const s= Symbol()
const s2= Symbol()
// console.log(s==s2) false

const prop ="name";
const info={
  [`my${prop}is`]:'lison'
};
console.log(info);

const s3=Symbol("name");
const info2={
  [s3]:"info"
};
console.log(info2);

info2[s3]="haha";
console.log(info2);

// Symbol.for 创建Symbol在同一作用域下重名会相等

const s4=Symbol.for('lison');
const s5=Symbol.for('lison');
const s6=Symbol.for('haha');
// console.log(s4===s5) // true
// console.log(s6===s5) // false

// Symbol.keyFor 获取键
console.log(Symbol.keyFor(s6));

export default {}