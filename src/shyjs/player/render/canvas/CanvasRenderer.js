import AbstractRenderer from '../AbstractRenderer'

/**
 *
 * Created Date: 2019-08-21, 23:20:08 (zhenliang.sun)
 * Last Modified: 2019-09-02, 00:22:58 (zhenliang.sun)
 * Email: zhenliang.sun@gmail.com
 *
 * Distributed under the MIT license. See LICENSE file for details.
 * Copyright (c) 2019 vhall
 */

/**
 * Canvas 渲染器,
 *
 * @export
 * @class CanvasRenderer
 * @extends {AbstractRenderer}
 * @author zhenliang.sun
 */
export default class CanvasRenderer extends AbstractRenderer {
  constructor(width, height) {
    super(width, height)
    // create canvas
    this.canvas = this._createCanvas(width, height)
  }

  render(displayObject) {
    super.render(displayObject)
  }

  resize(width, height) {
    super.resize(width, height)
  }

  clear() {
    super.clear()
  }

  destroy() {
    super.destroy()
  }

  get width() {
    return this.canvas.width
  }

  get height() {
    return this.canvas.height
  }

  /**
   * 创建一个canvas用于渲染
   *
   * @param {*} width
   * @param {*} height
   * @returns
   * @memberof CanvasRenderer
   */
  _createCanvas(width, height) {
    let canvas = document.createElement('canvas')
    if(!isNaN(width) && !isNaN(height)) {
      canvas.width = width
      canvas.height = height
    }

    this.context = canvas.getContext('2d')
    return canvas
  }
}
