// Record<K,T> 构造一个类型，该类型具有一组属性 K，每个属性的类型为 T。可用于将一个类型的属性映射为另一个类型。Record 后面的泛型就是对象键和值的类型。

// type Record<K extends keyof any, T> = {
// [P in K]: T;
// };

type Point = "x" | "y";
type PointList = Record<Point, { value: number }>;
const cars: PointList = {
  x: { value: 10 },
  y: { value: 20 },
};


export default {}