/**
 * Rectangle 对象是按其位置（由它左上角的点 (x, y) 确定）以及宽度和高度定义的区域。
Rectangle 类的 x、y、width 和 height 属性相互独立；更改一个属性的值不会影响其他属性。但是，right 和 bottom 属性与这四个属性是整体相关的。例如，如果更改 right 属性的值，则 width 属性的值将发生变化；如果更改 bottom 属性，则 height 属性的值将发生变化。
 *
 * @class Rectangle
 * @author zhenliang.sun
 */
class Rectangle {
  constructor(x = 0, y = 0, width = 0, height = 0) {
    this._x = x
    this._y = y
    this._width = width
    this._height = height
    this._top = null
    this._bottom = null
    this._left = null
    this._right = null
  }

  /**
   * 返回一个新的 Rectangle 对象，其 x、y、width 和 height 属性的值与原始 Rectangle 对象的对应值相同
   *
   * @returns
   * @memberof Rectangle
   */
  clone() {
    return new Rectangle(this.x, this.y, this.width, this.height)
  }

  /**
   * 确定由此 Rectangle 对象定义的矩形区域内是否包含指定的点
   *
   * @param {*} x 点的 x 坐标（水平位置）
   * @param {*} y 点的 y 坐标（垂直位置）
   * @memberof Rectangle
   * @returns 如果 Rectangle 对象包含指定的点，则值为 true；否则为 false
   */
  contains(x, y) {

  }

  /**
   * 确定由此 Rectangle 对象定义的矩形区域内是否包含指定的点
   *
   * @param {*} p
   * @memberof Rectangle
   */
  containsPoint(p) {

  }

  /**
   * 确定此 Rectangle 对象内是否包含由 rect 参数指定的 Rectangle 对象
   *
   * @param {*} rect
   * @memberof Rectangle
   */
  containsRect(rect) {

  }

  /**
   * 将源 Rectangle 对象中的所有矩形数据复制到调用方 Rectangle 对象中
   *
   * @param {*} sourceRect
   * @memberof Rectangle
   */
  copyFrom(sourceRect) {

  }

  /**
   * 确定在 toCompare 参数中指定的对象是否等于此 Rectangle 对象
   *
   * @param {*} toCompare
   * @memberof Rectangle
   */
  equals(toCompare) {
    return this.x === toCompare.x && this.y === toCompare.y && this.height === toCompare.height && this.width === toCompare.width
  }

  /**
   * 按指定量增加 Rectangle 对象的大小（以像素为单位）
   *
   * @param {*} dx
   * @param {*} dy
   * @memberof Rectangle
   */
  inflate(dx, dy) {

  }

  /**
   * 增加 Rectangle 对象的大小
   *
   * @param {*} p
   * @memberof Rectangle
   */
  inflatePoint(p) {

  }

  /**
   * 确定在 toIntersect 参数中指定的对象是否与此 Rectangle 对象相交
   *
   * @param {*} toIntersect
   * @memberof Rectangle
   */
  intersects(toIntersect) {

  }

  /**
   * 将 Rectangle 的成员设置为指定值
   *
   * @param {*} xa
   * @param {*} ya
   * @param {*} widtha
   * @param {*} heighta
   * @memberof Rectangle
   */
  setTo(xa, ya, widtha, heighta) {

  }

  /**
   * 生成并返回一个字符串，该字符串列出 Rectangle 对象的水平位置和垂直位置以及高度和宽度
   *
   * @memberof Rectangle
   */
  toString() {

  }

  /**
   * 通过填充两个矩形之间的水平和垂直空间，将这两个矩形组合在一起以创建一个新的 Rectangle 对象。
   *
   * @param {*} toUnion
   * @memberof Rectangle
   */
  union(toUnion) {

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

  set width(val) {
    this._width = val
  }

  get width() {
    return this._width
  }

  set height(val) {
    this._height = val
  }

  get height() {
    return this._height
  }

  set top(val) {
    this._top = val
  }

  get top() {
    return this._top
  }

  set left(val) {
    this._left = val
  }

  get left() {
    return this._left
  }

  set right(val) {
    this._right = val
  }

  get right() {
    return this._right
  }

  set bottom(val) {
    this._bottom = val
  }

  get bottom() {
    return this._bottom
  }

  /**
   * Rectangle 对象的大小，该对象表示为具有 width 和 height 属性的值的 Point 对象。
   *
   * @readonly
   * @memberof Rectangle
   * @returns Point
   */
  get size() {

  }
}

module.exports = Rectangle