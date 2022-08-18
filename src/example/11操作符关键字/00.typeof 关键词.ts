//先定义变量，再定义类型
let p1 = {
  name: "hello",
  age: 10,
  gender: "male",
};
type People = typeof p1;
function getName(p: People): string {
  return p.name;
}
getName(p1);
