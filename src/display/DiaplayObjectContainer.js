// import DisplayObject from './DisplayObject'
const DisplayObject = require('./DisplayObject')

/**
 * DisplayObjectContainer 类是可用作显示列表中显示对象容器的所有对象的基类。该显示列表管理 Flash 运行时中显示的所有对象。使用 DisplayObjectContainer 类排列显示列表中的显示对象。每个 DisplayObjectContainer 对象都有自己的子级列表，用于组织对象的 Z 轴顺序。Z 轴顺序是由前至后的顺序，可确定哪个对象绘制在前，哪个对象绘制在后等
 *
 * @class DisplayObjectContainer
 * @author zhenliang.sun
 */
class DisplayObjectContainer extends DisplayObject {
  constructor() {
    super()
    this.children = []
  }

  /**
   * 将一个 DisplayObject 子实例添加到该 DisplayObjectContainer 实例中。
   *
   * @param {*} child
   * @memberof DisplayObjectContainer
   * @returns child
   */
  addChild(child) {
    return child
  }

  /**
   * 将一个 DisplayObject 子实例添加到该 DisplayObjectContainer 实例中
   *
   * @param {*} child
   * @param {*} index
   * @memberof DisplayObjectContainer
   */
  addChildAt(child, index) {
    return child
  }

  /**
   * 返回位于指定索引处的子显示对象实例。
   *
   * @param {*} index
   * @memberof DisplayObjectContainer
   */
  getChildAt(index) {}

  /**
   * 返回具有指定名称的子显示对象
   *
   * @param {*} name
   * @memberof DisplayObjectContainer
   */
  getChildByName(name) {

  }

  /**
   * 返回 DisplayObject 的 child 实例的索引位置
   *
   * @param {*} index
   * @memberof DisplayObjectContainer
   */
  getChildIndex(index) {

  }

  /**
   * 返回对象的数组，这些对象位于指定点下，并且是该 DisplayObjectContainer 实例的子项（或孙子项，依此类推）。
   *
   * @param {*} p
   * @returns
   * @memberof DisplayObjectContainer
   */
  getObjectsUnderPoint(p) {
    return []
  }

  /**
   * 从 DisplayObjectContainer 实例的子列表中删除指定的 child DisplayObject 实例
   *
   * @param {*} child
   * @memberof DisplayObjectContainer
   */
  removeChild(child) {

  }

  /**
   * 从 DisplayObjectContainer 的子列表中指定的 index 位置删除子 DisplayObject
   *
   * @param {*} index
   * @memberof DisplayObjectContainer
   */
  removeChildAt(index) {}

  /**
   * 从 DisplayObjectContainer 实例的子级列表中删除所有子 DisplayObject 实例
   *
   * @param {*} beginIndex
   * @param {*} endIndex
   * @memberof DisplayObjectContainer
   */
  removeChildren(beginIndex, endIndex) {}

  /**
   * 更改现有子项在显示对象容器中的位置
   *
   * @param {*} child
   * @param {*} index
   * @memberof DisplayObjectContainer
   */
  setChildIndex(child, index) {

  }

  /**
   * 交换两个指定子对象的 Z 轴顺序（从前到后顺序）
   *
   * @param {*} child1
   * @param {*} child2
   * @memberof DisplayObjectContainer
   */
  swapChildren(child1, child2) {

  }

  /**
   * 在子级列表中两个指定的索引位置，交换子对象的 Z 轴顺序（前后顺序）
   *
   * @param {*} index1
   * @param {*} index2
   * @memberof DisplayObjectContainer
   */
  swapChildrenAt(index1, index2) {

  }
}

module.exports = DisplayObjectContainer
