/**
 *
 * Created Date: 2019-08-21, 23:19:11 (zhenliang.sun)
 * Last Modified: 2019-08-21, 23:23:00 (zhenliang.sun)
 * Email: zhenliang.sun@gmail.com
 *
 * Distributed under the MIT license. See LICENSE file for details.
 * Copyright (c) 2019 vhall
 */

/**
 * 抽象渲染器
 * 以防将来扩展出WEBGL等渲染器
 *
 * @export
 * @class AbstractRender
 * @author zhenliang.sun
 */
export default class AbstractRender {
  constructor() {}

  render(displayObject) {}
}
