// import DisplayObject from './DisplayObject'
const DisplayObject = require('./DisplayObject')

/**
 * 仅仅能够进行图形展示，无法当作容器
 * Shape 对象不是（并且不能包含子显示对象）。由于此原因，Shape 对象会比包含相同图形的 Sprite 对象消耗的内存少
 *
 * @class Shape
 * @extends {DisplayObject}
 * @author zhenliang.sun
 */
class Shape extends DisplayObject {
  constructor() {
    super()
  }
}

module.exports = Shape
