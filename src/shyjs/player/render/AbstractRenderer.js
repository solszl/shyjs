/**
 *
 * Created Date: 2019-08-21, 23:19:11 (zhenliang.sun)
 * Last Modified: 2019-09-02, 00:22:10 (zhenliang.sun)
 * Email: zhenliang.sun@gmail.com
 *
 * Distributed under the MIT license. See LICENSE file for details.
 * Copyright (c) 2019 vhall
 */

/**
 * 抽象渲染器
 * 以防将来扩展出WEBGL等渲染器
 *
 * @export
 * @class AbstractRender
 * @author zhenliang.sun
 */
export default class AbstractRender {
  constructor(width = 0, height = 0) {
    this._width = width
    this._height = height
    this.context = null
  }

  render(displayObject) {}
  resize(width, height) {}
  clear() {}
  destroy() {}

  get height() {
    return 0
  }

  get width() {
    return 0
  }
}
