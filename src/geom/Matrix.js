/**
 * Matrix 类表示一个转换矩阵，它确定如何将点从一个坐标空间映射到另一个坐标空间。您可以对一个显示对象执行不同的图形转换，方法是设置 Matrix 对象的属性，将该 Matrix 对象应用于 Transform 对象的 matrix 属性，然后应用该 Transform 对象作为显示对象的 transform 属性。这些转换函数包括平移（x 和 y 重新定位）、旋转、缩放和倾斜。
这些转换类型统称为仿射转换。仿射转换在转换时保持线条笔直，因此平行线保持平行。
 *
 * @class Matrix
 * @author zhenliang.sun
 */
class Matrix {
  /**
   * Creates an instance of Matrix.
   *      a  c  tx
   *      b  d  ty
   *      0  0  1
   * @param {number} [a=1] 缩放或旋转图像时影响像素沿 x 轴定位的值
   * @param {number} [b=0] 旋转或倾斜图像时影响像素沿 y 轴定位的值
   * @param {number} [c=0] 旋转或倾斜图像时影响像素沿 x 轴定位的值
   * @param {number} [d=1]  缩放或旋转图像时影响像素沿 y 轴定位的值
   * @param {number} [tx=0] 沿 x 轴平移每个点的距离
   * @param {number} [ty=0] 沿 y 轴平移每个点的距离
   * @memberof Matrix
   */
  constructor(a = 1, b = 0, c = 0, d = 1, tx = 0, ty = 0) {
    this.a = a
    this.b = b
    this.c = c
    this.d = d
    this.tx = tx
    this.ty = ty
  }

  /**
   * 返回一个新的 Matrix 对象，它是此矩阵的克隆，带有与所含对象完全相同的副本。
   *
   * @returns
   * @memberof Matrix
   */
  clone() {
    return new Matrix(this.a, this.b, this.c, this.d, this.tx, this.ty)
  }

  /**
   * 将源 Matrix 对象中的所有矩阵数据复制到调用方 Matrix 对象中
   *
   * @param {*} sourceMatrix
   * @memberof Matrix
   */
  copyFrom(sourceMatrix) {
    this.a = sourceMatrix.a
    this.b = sourceMatrix.b
    this.c = sourceMatrix.c
    this.d = sourceMatrix.d
    this.tx = sourceMatrix.tx
    this.ty = sourceMatrix.ty
  }

  /**
   * 包括用于缩放、旋转和转换的参数。
   *
   * @param {*} scaleX
   * @param {*} scaleY
   * @param {number} [rotation=0]
   * @param {number} [tx=0]
   * @param {number} [ty=0]
   * @memberof Matrix
   */
  createBox(scaleX, scaleY, rotation = 0, tx = 0, ty = 0) {

  }

  /**
   * 如果给定预转换坐标空间中的点，则此方法返回发生转换后该点的坐标。
   *
   * @param {*} p
   * @memberof Matrix
   */
  deltaTransformPoint(p) {

  }

  /**
   * 为每个矩阵属性设置一个值，该值将导致 null 转换。
   *
   * @memberof Matrix
   */
  identity() {

  }

  /**
   * 执行原始矩阵的逆转换。
   *
   * @memberof Matrix
   */
  invert() {

  }

  /**
   * 对 Matrix 对象应用旋转转换。
   *
   * @param {*} r
   * @memberof Matrix
   */
  rotate(r) {

  }

  /**
   * 对矩阵应用缩放转换。
   *
   * @param {*} sx
   * @param {*} sy
   * @memberof Matrix
   */
  scale(sx, sy) {

  }

  /**
   * 将 Matrix 的成员设置为指定值
   *
   * @param {*} aa
   * @param {*} ba
   * @param {*} ca
   * @param {*} da
   * @param {*} txa
   * @param {*} tya
   * @memberof Matrix
   */
  setTo(aa, ba, ca, da, txa, tya) {
    this.a = aa
    this.b = ba
    this.c = ca
    this.d = da
    this.tx = txa
    this.ty = tya
  }

  /**
   * 返回列出该 Matrix 对象属性的文本值。
   *
   * @memberof Matrix
   */
  toString() {
    return `(a=${this.a}, b=${this.b}, c=${this.c}, d=${this.d}, tx=${this.tx}, ty=${this.ty})`
  }

  /**
   * 返回将 Matrix 对象表示的几何转换应用于指定点所产生的结果。
   *
   * @param {*} p
   * @memberof Matrix
   */
  transformPoint(p) {

  }

  /**
   * 沿 x 和 y 轴平移矩阵，由 dx 和 dy 参数指定。
   *
   * @param {*} dx
   * @param {*} dy
   * @memberof Matrix
   */
  translate(dx, dy) {

  }

  set a(val) {
    this._a = val
  }

  /**
   * 缩放或旋转图像时影响像素沿 x 轴定位的值
   *
   * @memberof Matrix
   */
  get a() {
    return this._a
  }
  set b(val) {
    this._b = val
  }

  /**
   * 旋转或倾斜图像时影响像素沿 y 轴定位的值
   *
   * @memberof Matrix
   */
  get b() {
    return this._b
  }
  set c(val) {
    this._c = val
  }

  /**
   * 旋转或倾斜图像时影响像素沿 x 轴定位的值
   *
   * @memberof Matrix
   */
  get c() {
    return this._c
  }
  set d(val) {
    this._d = val
  }

  /**
   * 缩放或旋转图像时影响像素沿 y 轴定位的值
   *
   * @memberof Matrix
   */
  get d() {
    return this._d
  }
  set tx(val) {
    this._tx = val
  }

  /**
   * 沿 x 轴平移每个点的距离
   *
   * @memberof Matrix
   */
  get tx() {
    return this._tx
  }
  set ty(val) {
    this._ty = val
  }

  /**
   * 沿 y 轴平移每个点的距离
   *
   * @memberof Matrix
   */
  get ty() {
    return this._ty
  }
}

module.exports = Matrix
