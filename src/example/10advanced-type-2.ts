class Counters {
  constructor(public count: number = 0) { }
  //! 返回实例自身进行链式调用
  public add(value: number) {
    this.count += value
    return this
  }
  public subtract(value: number) {
    this.count -= value
    return this
  }
}
const counter1 = new Counters(10)
console.log(counter1.add(1).subtract(5));

class PowCounter extends Counters {
  constructor(public count: number = 0) {
    super(count)
  }
  /**
   * pow
   */
  public pow(value: number) {
    this.count = this.count ** value
    return this
  }
}
const powcounter = new PowCounter(2);
console.log(
  powcounter.pow(2)
    .add(12)
    .subtract(15)
);



export default {}




