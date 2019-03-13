/**
 *
 * Created Date: 2019-03-14, 00:24:11 (zhenliang.sun)
 * Last Modified: 2019-03-14, 02:36:31 (zhenliang.sun)
 * Email: zhenliang.sun@gmail.com
 *
 * Distributed under the MIT license. See LICENSE file for details.
 * Copyright (c) 2019 vhall
 */

import DisplayObjectContainer from './../../../src/shyjs/display/DisplayObjectContainer'
import Sprite from './../../../src/shyjs/display/Sprite'
import Shape from './../../../src/shyjs/display/Shape'

let container = new DisplayObjectContainer()

test('container 不为空', () => {
  expect(container !== null).toBe(true)
})

let child1 = new Sprite()
test('列表长度应当为1', () => {
  container.addChild(child1)
  expect(container.children.length).toBe(1)
})

let child2 = new Sprite()
test('列表长度应当为2', () => {
  container.addChild(child2)
  expect(container.children.length).toBe(2)
})

let child3 = new Shape()
test('把Shape插入到第一个', () => {
  container.addChildAt(child3, 0)
  expect(container.children[0] instanceof Shape).toBe(true)
})

test('第1个元素应当是Shape类型', () => {
  expect(container.getChildAt(0) instanceof Shape).toBe(true)
})

test('第10个元素应当是null', () => {
  expect(container.getChildAt(10)).toBe(null)
})

test('Shape的索引应当是0', () => {
  expect(container.getChildIndex(child3)).toBe(0)
})

test('移除一个不存在的child', () => {
  let child = {}
  expect(container.removeChild(child)).toBe(child)
})

test('移除一个存在的child', () => {
  expect(container.removeChild(child3)).toEqual([child3])
})

test('把shape追加到列表尾部，长度为3', () => {
  container.addChild(child3)
  expect(container.children.length).toBe(3)
})

test('移除一个非常规索引,应当返回null', () => {
  expect(container.removeChildAt(-1)).toBe(null)
})

test('移除begin 大于end,返回[]', () => {
  expect(container.removeChildren(10, 2)).toEqual([])
})
