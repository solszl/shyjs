import Ticker from './Ticker'
import Logger from './utils/Logger'

/**
 *
 * Created Date: 2019-08-18, 01:07:43 (zhenliang.sun)
 * Last Modified: 2019-08-18, 01:27:57 (zhenliang.sun)
 * Email: zhenliang.sun@gmail.com
 *
 * Distributed under the MIT license. See LICENSE file for details.
 * Copyright (c) 2019 vhall
 */

/**
 *
 *
 * @export
 * @class Kernel
 * @author zhenliang.sun
 */
export default class Kernel {
  constructor() {
    Logger.OBJ.level = 'all'
    let ticker = new Ticker()
  }
}
