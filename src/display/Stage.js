import DisplayObjectContainer from './DisplayObjectContainer'
// const DisplayObjectContainer = require('./DisplayObjectContainer')

/**
 * Stage 类代表主绘图区
 *
 * @class Stage
 * @extends {DisplayObjectContainer}
 */
export default class Stage extends DisplayObjectContainer {
  constructor() {
    super()
    this._color = null
    this._frameRate = 30
  }

  addChild(child) {
    child._stage = this
    return super.addChild(child)
  }

  addChildAt(child, index) {
    child._stage = this
    return super.addChildAt(child, index)
  }

  removeChild(child) {
    let c = super.removeChild(child)
    c._stage = null
    return c
  }

  removeChildAt(index) {
    let child = super.removeChildAt(index)
    child._stage = null
    return child
  }

  /**
   * 调用 invalidate() 方法，以便在出现下一个运行时必须呈现显示列表的时机（例如，当播放头前进到一个新帧）时，向其发送提醒显示对象的信号
   *
   * @memberof Stage
   */
  invalidate() {}

  /**
   * 指定舞台的当前宽度（以像素为单位）
   *
   * @readonly
   * @memberof Stage
   */
  get stageWidth() {
    return 0
  }

  /**
   * 舞台的当前高度（以像素为单位）
   *
   * @readonly
   * @memberof Stage
   */
  get stageHeight() {
    return 0
  }

  set frameRate(val) {
    this._frameRate = val
  }

  /**
   * 获取并设置舞台的帧速率。帧速率是指每秒显示的帧数。默认情况下，速率设置为浏览器的帧速率
   *
   * @memberof Stage
   */
  get frameRate() {
    return this._frameRate
  }

  set color(val) {
    this._color = val
  }

  get color() {
    return this._color
  }
}

export const StageEvent = {
  Activate: 'Shy.Activate',
  Deactivate: 'Shy.Deactivate',
  Resize: 'Shy.Resize',
  MouseLeave: 'Shy.MouseLeave'
}

// module.exports = {
//   Stage,
//   StageEvent
// }