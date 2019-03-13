/**
import Point from "./geom/Point";
 *
 * Created Date: 2019-03-03, 2:56:22 (zhenliang.sun)
 * Last Modified: 2019-03-03, 17:02:00 (zhenliang.sun)
 * Email: zhenliang.sun@gmail.com
 *
 * Distributed under the MIT license. See LICENSE file for details.
 * Copyright (c) 2019 vhall
 */

// const EE = require('./event/EventEmitter')

// var i = 0
// EE.on('abcd', (a, b, c, d, e) => {
//   console.log('啦啦啦', i++, a, b, c, d, e)
// }, 0, 5500)

// EE.emit('abcd', 'a', 'b', 'c', 'd', 'e')

// setTimeout(() => {
//   console.log('3秒调用派发事件')
//   EE.emit('abcd', 'aa', 'b', 'c', 'd', 'e')
// }, 3000)

// const Point = require('./geom/Point')
// var p = new Point()
// var p2 = p.add(new Point(10, 10))
// console.log(p.x, p.y)
// console.log(p2, p2.x)
// console.log(p.toString())

// const UUID = require('./utils/UUID')
// let i = 0
// while(i < 10) {
//   console.log(UUID.create())
//   i += 1
// }

// const DisplayObject = require('./display/DisplayObject')
// var d = new DisplayObject()
// console.log(d)

// const Event = require('./event/Event')
// console.log(Event.Added)
// console.log(Event.AddedToStage)
// console.log(Event.EnterFrame)

// const DisplayObjectContainer = require('./display/DiaplayObjectContainer')
// var con = new DisplayObjectContainer()
// console.log(con)

const Stage = require('./display/Stage').Stage
const Sprite = require('./display/Sprite')
var stage = new Stage()
var sp = new Sprite()

console.log(sp.stage)
stage.addChild(sp)
console.log(sp.stage)
