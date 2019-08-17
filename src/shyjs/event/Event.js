/**
 *
 *
 * @class Event
 * @author zhenliang.sun
 */
export default class Event {
  static ADDED = 'Shy.added'
  static ADDED_TO_STAGE = 'Shy.addedToStage'
  static ENTER_FRAME = 'Shy.enterFrame'
  static WILL_REMOVE = 'Shy.willRemove'
  static REMOVED_FROM_STAGE = 'Shy.removedFromStage'
  static RENDER = 'Shy.render'
  static RESIZE = 'Shy.resize'

  constructor(type, data = null) {
    this.type = type
    this.data = data
    this.target = null
  }

  /**
   * 复制 Event 子类的实例。
   *
   * @returns
   * @memberof Event
   */
  clone() {
    return new Event(this.type, this.data)
  }

  /**
   * 返回一个字符串，其中包含 Event 对象的所有属性
   *
   * @memberof Event
   */
  toString() {
    return `[Event type=${this.type} data=${this.data ? JSON.stringify(this.data) : ''}]`
  }
}
