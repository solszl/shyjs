import DisplayObject from './DisplayObject'
import DisplayObjectContainer from './DisplayObjectContainer'

/**
 * Stage 类代表主绘图区
 *
 * @class Stage
 * @extends {DisplayObjectContainer}
 * @author zhenliang.sun
 */
export default class Stage extends DisplayObjectContainer {
  constructor() {
    super()
    if(DisplayObject.stage) {
      throw new Error('只能有一个stage')
    }

    this._color = null
    DisplayObject.stage = this
    this.addEventListener(StageEvent.Resize, this._onStageResizeHandler.bind(this))
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

  set color(val) {
    this._color = val
  }

  get color() {
    return this._color
  }

  get stage() {
    throw new Error('could not provide property \'stage\' by Stage instance')
  }

  _onStageResizeHandler(e) {
    console.error(e)
  }
}

export const StageEvent = {
  Activate: 'Shy.Activate',
  Deactivate: 'Shy.Deactivate',
  Resize: 'Shy.stageResize',
  MouseLeave: 'Shy.MouseLeave'
}
