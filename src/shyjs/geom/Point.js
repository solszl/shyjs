/**
 * Point 对象表示二维坐标系统中的某个位置，其中 x 表示水平轴，y 表示垂直轴。
 *
 * @export
 * @class Point
 * @author zhenliang.sun
 */
export default class Point {
  constructor(x = 0, y = 0) {
    this.x = x
    this.y = y
  }

  /**
   * 将另一个点的坐标添加到此点的坐标以创建一个新点。
   *
   * @param {*} p 要添加的点
   * @returns 新点
   * @memberof Point
   */
  add(p) {
    return new Point(this.x + p.x, this.y + p.y)
  }

  /**
   * 创建此 Point 对象的副本。
   *
   * @returns
   * @memberof Point
   */
  clone() {
    return new Point(this.x, this.y)
  }

  /**
   * 将源 Point 对象中的所有点数据复制到调用方 Point 对象中。
   *
   * @param {*} sourcePoint
   * @memberof Point
   */
  copyFrom(sourcePoint) {
    this.x = sourcePoint.x
    this.y = sourcePoint.y
  }

  /**
   * 确定两个点是否相同
   *
   * @param {*} toCompare
   * @returns
   * @memberof Point
   */
  equals(toCompare) {
    return this.x === toCompare.x && this.y === toCompare.y
  }

  /**
   * 按指定量偏移 Point 对象
   *
   * @param {*} dx
   * @param {*} dy
   * @memberof Point
   */
  offset(dx, dy) {
    this.x += dx
    this.y += dy
  }

  /**
   * 将 Point 的成员设置为指定值
   *
   * @param {*} xa
   * @param {*} ya
   * @memberof Point
   */
  setTo(xa, ya) {
    this.x = xa
    this.y = ya
  }

  /**
   * 从此点的坐标中减去另一个点的坐标以创建一个新点
   *
   * @param {*} p
   * @returns
   * @memberof Point
   */
  subtract(p) {
    return new Point(this.x - p.x, this.y - p.y)
  }

  /**
   * 返回包含 x 和 y 坐标的值的字符串。
   *
   * @returns
   * @memberof Point
   */
  toString() {
    return `(x=${this.x}, y=${this.y})`
  }

  /**
   * [静态]
   *
   * @readonly
   * @static
   * @memberof Point
   */
  static get length() {
    return Math.sqrt(this.x * this.x, this.y * this.y)
  }

  /**
   * [静态] 返回 p1 和 p2 之间的距离
   *
   * @static
   * @param {*} p1
   * @param {*} p2
   * @returns
   * @memberof Point
   */
  static distance(p1, p2) {
    const x = p2.x - p1.x
    const y = p2.y - p1.y
    return Math.sqrt(x * x, y * y)
  }

  set x(val) {
    this._x = val
  }

  get x() {
    return this._x
  }

  set y(val) {
    this._y = val
  }

  get y() {
    return this._y
  }
}
