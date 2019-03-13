/**
 *
 * Created Date: 2019-03-14, 00:24:11 (zhenliang.sun)
 * Last Modified: 2019-03-14, 00:43:36 (zhenliang.sun)
 * Email: zhenliang.sun@gmail.com
 *
 * Distributed under the MIT license. See LICENSE file for details.
 * Copyright (c) 2019 vhall
 */

import DisplayObjectContainer from './../../../src/shyjs/display/DisplayObjectContainer'

let container = new DisplayObjectContainer()

test('container 不为空', () => {
  expect(container !== null).toBe(true)
})
