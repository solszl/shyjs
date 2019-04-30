import Rectangle from '../../../src/shyjs/geom/Rectangle'
import Point from '../../../src/shyjs/geom/Point'

/**
 *
 * Created Date: 2019-04-30, 14:19:56 (zhenliang.sun)
 * Last Modified: 2019-04-30, 14:47:25 (zhenliang.sun)
 * Email: zhenliang.sun@gmail.com
 *
 * Distributed under the MIT license. See LICENSE file for details.
 * Copyright (c) 2019 vhall
 */

let rect = new Rectangle()
rect.x = 10
rect.y = 20
rect.width = 40
rect.height = 20

test('是否包含(3,3)', () => {
  expect(rect.contains(3, 3)).toBe(false)
})

test('是否包含(10,20)', () => {
  expect(rect.contains(10, 20)).toBe(true)
})

test('是否包含(20,30)', () => {
  expect(rect.contains(20, 30)).toBe(true)
})

test('是否包含(3,3)点', () => {
  expect(rect.containsPoint(new Point(3, 3))).toBe(false)
})

test('是否包含(10,20)点', () => {
  expect(rect.containsPoint(new Point(10, 20))).toBe(true)
})

test('是否包含(20,30)点', () => {
  expect(rect.containsPoint(new Point(20, 30))).toBe(true)
})

test('clone', () => {
  let r = rect.clone()
  expect(
    r.x === rect.x &&
      r.y === rect.y &&
      r.width === rect.width &&
      r.height === rect.height
  ).toBe(true)
})

test('clone equal', () => {
  let r = rect.clone()
  expect(rect.equals(r)).toBe(true)
})

test('copy from', () => {
  let r = new Rectangle()
  r.copyFrom(rect)
  expect(r.equals(rect)).toBe(true)
})

test('inflate x', () => {
  rect.inflate(10, 10)
  expect(rect.width).toEqual(50)
})

test('inflate x2', () => {
  rect.inflate(10, 10)
  expect(rect.width === 30).toBe(false)
})

test('inflate y', () => {
  rect.inflate(10, 10)
  expect(rect.height).toEqual(50)
})

test('inflate y2', () => {
  rect.inflate(10, 10)
  expect(rect.height === 10).toBe(false)
})

test('inflate point 10,10', () => {
  rect.inflatePoint(new Point(10, 10))
  expect(rect.height).toEqual(70)
})

test('intersects 远离', () => {
  let r = new Rectangle(0, 0, 4, 4)
  expect(rect.intersects(r)).toBe(false)
})

test('intersects 相交', () => {
  let r = new Rectangle(0, 0, 40, 40)
  expect(rect.intersects(r)).toBe(true)
})

test('intersects 重叠', () => {
  let r = rect.clone()
  expect(rect.intersects(r)).toBe(true)
})

test('intersection 远离', () => {
  let r = new Rectangle(0, 0, 4, 4)
  let r2 = rect.clone()
  r2.intersection(r)
  let r3 = new Rectangle()
  expect(r2.equals(r3)).toBe(false)
})
