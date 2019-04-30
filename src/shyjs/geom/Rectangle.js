import Point from './Point'
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
    return (
      x > this.x &&
      x < this.x + this.width &&
      y > this.y &&
      y < this.y + this.height
    )
  }

  /**
   * 确定由此 Rectangle 对象定义的矩形区域内是否包含指定的点
   *
   * @param {*} p
   * @memberof Rectangle
   */
  containsPoint(p) {
    return this.contains(p.x, p.y)
  }

  /**
   * 确定此 Rectangle 对象内是否包含由 rect 参数指定的 Rectangle 对象
   *
   * @param {*} rect
   * @memberof Rectangle
   */
  containsRect(rect) {
    const w1 = rect.x + rect.width
    const h1 = rect.y + rect.height
    const w2 = this.x + this.width
    const h2 = this.y + this.height
    return (
      rect.x > this.x &&
      rect.x <= w2 &&
      rect.y > this.y &&
      rect.y <= h2 &&
      w1 > this.x &&
      w1 <= w2 &&
      h1 <= h2 &&
      h1 > this.y
    )
  }

  /**
   * 将源 Rectangle 对象中的所有矩形数据复制到调用方 Rectangle 对象中
   *
   * @param {*} sourceRect
   * @memberof Rectangle
   */
  copyFrom(sourceRect) {
    this.x = sourceRect.x
    this.y = sourceRect.y
    this.width = sourceRect.width
    this.height = sourceRect.height
    return this
  }

  /**
   * 确定在 toCompare 参数中指定的对象是否等于此 Rectangle 对象
   *
   * @param {*} toCompare
   * @memberof Rectangle
   */
  equals(toCompare) {
    if(this === toCompare) {
      return true
    }

    return (
      this.x === toCompare.x &&
      this.y === toCompare.y &&
      this.height === toCompare.height &&
      this.width === toCompare.width
    )
  }

  /**
   * 按指定量增加 Rectangle 对象的大小（以像素为单位）
   *
   * @param {*} dx
   * @param {*} dy
   * @memberof Rectangle
   */
  inflate(dx, dy) {
    this.x += dx
    this.y += dy
  }

  /**
   * 增加 Rectangle 对象的大小
   *
   * @param {*} p
   * @memberof Rectangle
   */
  inflatePoint(p) {
    this.inflate(p.x, p.y)
  }

  /**
   * 确定在 toIntersect 参数中指定的对象是否与此 Rectangle 对象相交
   *
   * @param {*} toIntersect
   * @memberof Rectangle
   */
  intersects(toIntersect) {
    const atl = new Point(this.x, this.y)
    const abr = new Point(this.x + this.width, this.y + this.height)
    const btl = new Point(toIntersect.x, toIntersect.y)
    const bbr = new Point(
      toIntersect.x + toIntersect.width,
      toIntersect.y + toIntersect.height
    )

    return (
      Math.max(atl.x, btl.x) <= Math.min(abr.x, bbr.x) &&
      Math.max(atl.y, btl.y) <= Math.min(abr.y, bbr.y)
    )
  }

  /**
   * 如果在 toIntersect 参数中指定的 Rectangle 对象与此 Rectangle 对象相交，则返回交集区域作为 Rectangle 对象。如果矩形不相交，则此方法返回一个空的 Rectangle 对象，其属性设置为 0
   *
   * @param {*} toIntersect
   * @memberof Rectangle
   */
  intersection(toIntersect) {
    if(!this.containsRect(toIntersect)) {
      this.setTo(0, 0, 0, 0)
    }

    this.union(toIntersect)
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
    this.x = xa
    this.y = ya
    this.width = widtha
    this.height = heighta
  }

  /**
   * 生成并返回一个字符串，该字符串列出 Rectangle 对象的水平位置和垂直位置以及高度和宽度
   *
   * @memberof Rectangle
   */
  toString() {
    return `(x=${this.x},y=${this.y},height=${this.height},width=${this.width})`
  }

  /**
   * 通过填充两个矩形之间的水平和垂直空间，将这两个矩形组合在一起以创建一个新的 Rectangle 对象。
   *
   * @param {*} toUnion
   * @memberof Rectangle
   */
  union(toUnion) {
    const atl = new Point(this.x, this.y)
    const btl = new Point(toUnion.x, toUnion.y)

    this.setTo(
      Math.min(atl.x, btl.x),
      Math.min(atl.y, btl.y),
      btl.x - atl.x + toUnion.width,
      btl.y - atl.y + toUnion.height
    )

    return this
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
  get size() {}
}

module.exports = {
  Rectangle
}
