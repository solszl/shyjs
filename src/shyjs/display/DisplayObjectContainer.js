import InteractiveObject from './InteractiveObject'

/**
 * DisplayObjectContainer 类是可用作显示列表中显示对象容器的所有对象的基类。该显示列表管理 Flash 运行时中显示的所有对象。使用 DisplayObjectContainer 类排列显示列表中的显示对象。每个 DisplayObjectContainer 对象都有自己的子级列表，用于组织对象的 Z 轴顺序。Z 轴顺序是由前至后的顺序，可确定哪个对象绘制在前，哪个对象绘制在后等
 *
 * @class DisplayObjectContainer
 * @author zhenliang.sun
 */
export default class DisplayObjectContainer extends InteractiveObject {
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
    child._parent = this
    return this.children.push(child)
  }

  /**
   * 将一个 DisplayObject 子实例添加到该 DisplayObjectContainer 实例中
   *
   * @param {*} child
   * @param {*} index
   * @memberof DisplayObjectContainer
   */
  addChildAt(child, index) {
    child._parent = this
    this.children.splice(index, 0, child)
    return child
  }

  /**
   * 返回位于指定索引处的子显示对象实例。
   *
   * @param {*} index
   * @memberof DisplayObjectContainer
   */
  getChildAt(index) {
    let list = this.children
    if(list.length < index) {
      return null
    }
    return list[index]
  }

  /**
   * 返回具有指定名称的子显示对象
   *
   * @param {*} name
   * @memberof DisplayObjectContainer
   */
  getChildByName(name) {
    let list = this.children
    let result = list.filter(item => item.name === name)
    return result.length ? result[0] : null
  }

  /**
   * 返回 DisplayObject 的 child 实例的索引位置
   *
   * @param {*} child
   * @memberof DisplayObjectContainer
   */
  getChildIndex(child) {
    return this.children.indexOf(child)
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
    child._parent = null
    let idx = this.children.indexOf(child)
    if(idx === -1) {
      return child
    }
    return this.children.splice(idx, 1)
  }

  /**
   * 从 DisplayObjectContainer 的子列表中指定的 index 位置删除子 DisplayObject
   *
   * @param {*} index
   * @memberof DisplayObjectContainer
   */
  removeChildAt(index) {
    let list = this.children
    if(index > list.length || index < 0) {
      return null
    }

    let removedChildren = this.children.splice(index, 1)
    removedChildren.forEach(child => {
      child._parent = null
    })
    return removedChildren
  }

  /**
   * 从 DisplayObjectContainer 实例的子级列表中删除所有子 DisplayObject 实例
   *
   * @param {*} beginIndex
   * @param {*} endIndex
   * @memberof DisplayObjectContainer
   */
  removeChildren(beginIndex, endIndex) {
    if(beginIndex > endIndex) {
      return []
    }

    let removedChildren = this.children.splice(
      beginIndex,
      endIndex - beginIndex + 1
    )
    removedChildren.forEach(child => {
      child._parent = null
    })

    return removedChildren
  }

  /**
   * 更改现有子项在显示对象容器中的位置
   *
   * @param {*} child
   * @param {*} index
   * @memberof DisplayObjectContainer
   */
  setChildIndex(child, index) {
    let list = this.children
    if(index > list.length) {
      index = list.length
    }
    if(index < 0) {
      index = 0
    }

    if(!list.includes(child)) {
      return list.splice(index, 0, child)
    }

    let idx = list.indexOf(child)
    list.splice(idx, 1)
    list.splice(index, 0, child)
    return child
  }

  /**
   * 交换两个指定子对象的 Z 轴顺序（从前到后顺序）
   *
   * @param {*} child1
   * @param {*} child2
   * @memberof DisplayObjectContainer
   */
  swapChildren(child1, child2) {
    let list = this.children
    if(!list.includes(child1) || !list.includes(child2)) {
      return false
    }

    let tempChild = child1
    let child1Index = list.indexOf(child1)
    let child2Index = list.indexOf(child2)
    list[child1Index] = child2
    list[child2Index] = tempChild
    return true
  }

  /**
   * 在子级列表中两个指定的索引位置，交换子对象的 Z 轴顺序（前后顺序）
   *
   * @param {*} index1
   * @param {*} index2
   * @memberof DisplayObjectContainer
   */
  swapChildrenAt(index1, index2) {
    let list = this.children
    if(index1 < 0 || index1 > list.length) {
      return false
    }

    if(index2 < 0 || index2 > list.length) {
      return false
    }

    let tempChild1 = list[index1]
    let tempChild2 = list[index2]
    list[index1] = tempChild2
    list[index2] = tempChild1
    return true
  }

  removeFromParent() {
    if(this._parent) {
      this._parent.removeChild(this)
      return true
    }

    return false
  }

  destroy() {
    let list = this.children
    list.forEach(child => {
      child.destroy()
    })

    list = []
  }
}
