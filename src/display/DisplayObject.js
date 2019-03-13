import UUID from '../utils/UUID'
// const UUID = require('../utils/UUID')
/**
 * DisplayObject 类是可放在显示列表中的所有对象的基类。该显示列表管理 Flash 运行时中显示的所有对象。使用 DisplayObjectContainer 类排列显示列表中的显示对象。DisplayObjectContainer 对象可以有子显示对象，而其他显示对象（如 Shape 和 TextField 对象）是“叶”节点，只有父级和同级，没有子级。
 * DisplayObject 类支持基本功能（如对象的 x 和 y 位置），也支持更高级的对象属性（如它的转换矩阵）。
 * DisplayObject 是一种抽象基类；因此，不能直接调用 DisplayObject。调用 new DisplayObject() 会引发 ArgumentError 异常。
 * 所有显示对象都继承自 DisplayObject 类。
 * DisplayObject 类本身不包含任何用于在屏幕上呈现内容的 API。因此，如果要创建 DisplayObject 类的自定义子类，您将需要扩展其中一个具有在屏幕上呈现内容的 API 的子类，如 Shape、Sprite、Bitmap、SimpleButton、TextField 或 MovieClip 类。
 *
 * @class DisplayObject
 * @author zhenliang.sun
 */
export default class DisplayObject {
  constructor() {
    this._name = ''
    this._width = 0
    this._height = 0
    this._stage = null
    this._filters = []
    this._mouseX = 0
    this._mouseY = 0
    this._parent = null
    this._rotation = 0
    this._scaleX = 1
    this._scaleY = 1
    this._transform = null
    this._visible = true
    this._x = 0
    this._y = 0
    this._nestLevel = 0
    this._uuid = UUID.create()
  }

  addEventListener() {}
  dispatchEvent() {}
  hasEventListener(type) {}
  removeEventListener(type, listener) {}
  removeEventListeners() {}

  getBounds() {}
  toString() {}

  localToGlobal(p) {}
  globalToLocal(p) {}

  hitTest(x, y) {}
  hitTestObject(obj) {}

  destroy() {}
}

// module.exports = DisplayObject