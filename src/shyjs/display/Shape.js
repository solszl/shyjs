import DisplayObject from './DisplayObject'

/**
 * 仅仅能够进行图形展示，无法当作容器
 * Shape 对象不是（并且不能包含子显示对象）。由于此原因，Shape 对象会比包含相同图形的 Sprite 对象消耗的内存少
 *
 * @class Shape
 * @extends {DisplayObject}
 * @author zhenliang.sun
 */
export default class Shape extends DisplayObject {
  constructor() {
    super()
    this._graphics = new Graphics()
  }

  /**
   * [只读] 指定属于该 Shape 对象的 Graphics 对象，可通过此对象执行矢量绘图命令
   *
   * @readonly
   * @memberof Sprite
   */
  get graphics() {
    return this._graphics
  }
}