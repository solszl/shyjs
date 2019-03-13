/**
 *
 * Created Date: 2019-03-13, 21:50:35 (zhenliang.sun)
 * Last Modified: 2019-03-13, 23:14:30 (zhenliang.sun)
 * Email: zhenliang.sun@gmail.com
 *
 * Distributed under the MIT license. See LICENSE file for details.
 * Copyright (c) 2019 vhall
 */

/**
 * Graphics 类包含一组可用来创建矢量形状的方法。支持绘制的显示对象包括 Sprite 和 Shape 对象。这些类中的每一个类都包括 graphics 属性，该属性是一个 Graphics 对象。
 *
 * @export
 * @class Graphics
 * @author zhenliang.sun
 */
export default class Graphics {
  constructor() {}
}

const LineCap = {
  None: 'butt',
  Round: 'round',
  Square: 'square'
}

const LineJoin = {
  Miter: 'miter',
  Bevel: 'bevel',
  Round: 'round'
}

module.exports = {
  Graphics,
  LineCap,
  LineJoin
}
