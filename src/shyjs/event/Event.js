/**
 *
 *
 * @class Event
 * @author zhenliang.sun
 */
class Event {
  constructor(type, data = null) {
    this.type = type
    this.data = data
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

const Added = 'Shy.Added'
const AddedToStage = 'Shy.AddedToStage'
const EnterFrame = 'Shy.EnterFrame'
const WillRemove = 'Shy.WillRemove'
const RemoveFromStage = 'Shy.RemoveFromStage'
const Render = 'Shy.Render'

module.exports = {
  Event,
  Added,
  AddedToStage,
  EnterFrame,
  WillRemove,
  RemoveFromStage,
  Render
}
