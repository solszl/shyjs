import DisplayObjectContainer from './DisplayObjectContainer'
// const DisplayObjectContainer = require('./DisplayObjectContainer')
export default class Sprite extends DisplayObjectContainer {
  constructor() {
    super()
    this._buttonMode = false
  }

  /**
   * 允许用户拖动指定的 Sprite。Sprite 将一直保持可拖动，直到通过调用 Sprite.stopDrag() 方法来明确停止，或直到将另一个 Sprite 变为可拖动为止。在同一时间只有一个 Sprite 是可拖动的。
   *
   * @param {*} lockCenter
   * @param {*} bounds
   * @memberof Sprite
   */
  startDrag(lockCenter, bounds) {

  }

  /**
   * 结束 startDrag() 方法。通过 startDrag() 方法变为可拖动的 Sprite 将一直保持可拖动状态，直到添加 stopDrag() 方法或另一个 Sprite 变为可拖动状态为止。在同一时间只有一个 Sprite 是可拖动的。
   *
   * @memberof Sprite
   */
  stopDrag() {

  }

  set buttonMode(val) {
    this._buttonMode = val
  }

  /**
   * 指定此 sprite 的按钮模式
   *
   * @memberof Sprite
   */
  get buttonMode() {
    return this._buttonMode
  }

  /**
   * [只读] 指定拖动 sprite 时经过的显示对象，或放置 sprite 的显示对象
   *
   * @readonly
   * @memberof Sprite
   */
  get dropTarget() {

  }

  /**
   * [只读] 指定属于此 sprite 的 Graphics 对象，在此 sprite 中可执行矢量绘图命令
   *
   * @readonly
   * @memberof Sprite
   */
  get graphics() {

  }

  get stage() {
    return this._stage
  }
}

// module.exports = Sprite