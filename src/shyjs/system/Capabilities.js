/**
 *
 * Created Date: 2019-03-18, 10:50:34 (zhenliang.sun)
 * Last Modified: 2019-03-18, 20:26:57 (zhenliang.sun)
 * Email: zhenliang.sun@gmail.com
 *
 * Distributed under the MIT license. See LICENSE file for details.
 * Copyright (c) 2019 vhall
 */

/**
 * Capabilities 类提供一些属性，这些属性描述了承载应用程序的系统和运行时。
 *
 * @export
 * @class Capabilities
 */
export default class Capabilities {
  /**
   * 当前版本
   *
   * @readonly
   * @static
   * @memberof Capabilities
   */
  static get version() {
    return process.env.VERSION
  }

  static get isDebugger() {
    return process.env.DEBUGGER
  }

  /**
   * 返回操作系统和对应版本
   *
   * @readonly
   * @static
   * @memberof Capabilities
   * @returns 如 \{os: "Windows", version: "Windows 7"\}
   */
  static get os() {
    return osInfo()
  }

  /**
   * [静态] [只读] 指定屏幕的每英寸点数 (dpi) 分辨率，以像素为单位。
   *
   * @readonly
   * @static
   * @memberof Capabilities
   */
  static get screenDPI() {
    // https://stackoverflow.com/questions/279749/detecting-the-system-dpi-ppi-from-js-css
    const findFirstPositive = (b, a, i, c) => {
      // eslint-disable-next-line no-nested-ternary, no-return-assign
      c = (d, e) => e >= d ? (a = d + (e - d) / 2, b(a) > 0 && (a === d || b(a - 1) <= 0) ? a : b(a) <= 0 ? c(a + 1, e) : c(d, a - 1)) : -1
      for(i = 1; b(i) <= 0;) i *= 2
      return c(i / 2, i) | 0
    }

    let dpi = findFirstPositive(x => matchMedia(`(max-resolution: ${x}dpi)`).matches)
    return dpi
  }

  /**
   * [静态] [只读] 指定屏幕的最大水平分辨率。
   *
   * @readonly
   * @static
   * @memberof Capabilities
   */
  static get screenResolutionX() {
    return window.screen.width
  }

  /**
   * [静态] [只读] 指定屏幕的最大垂直分辨率。
   *
   * @readonly
   * @static
   * @memberof Capabilities
   */
  static get screenResolutionY() {
    return window.screen.height
  }
}

function osInfo() {
  const ua = window.navigator.userAgent.toLowerCase()
  var name = 'Unknown'
  var version = 'Unknown'
  if(/win/.test(ua)) {
    name = 'Windows'
    if(ua.indexOf('windows nt 5.0') > -1) {
      version = 'Windows 2000'
    } else if(ua.indexOf('windows nt 5.1') > -1 || ua.indexOf('windows nt 5.2') > -1) {
      version = 'Windows XP'
    } else if(ua.indexOf('windows nt 6.0') > -1) {
      version = 'Windows Vista'
    } else if(ua.indexOf('windows nt 6.1') > -1 || ua.indexOf('windows 7') > -1) {
      version = 'Windows 7'
    } else if(ua.indexOf('windows nt 6.2') > -1 || ua.indexOf('windows 8') > -1) {
      version = 'Windows 8'
    } else if(ua.indexOf('windows nt 6.3') > -1) {
      version = 'Windows 8.1'
    } else if(ua.indexOf('windows nt 6.2') > -1 || ua.indexOf('windows nt 10.0') > -1) {
      version = 'Windows 10'
    } else {
      version = 'Unknown'
    }
  } else if(ua.match(/android|adr/i)) {
    name = 'Linux'
    version = ua.substr(ua.indexOf('Android') + 8, ua.indexOf(';', ua.indexOf('Android')) - ua.indexOf('Android') - 8)
  } else if(ua.match(/ipad|iphone|ipod/i)) {
    name = 'iOS'
    var regStrSaf = /OS [\d._]*/gi
    var info = ua.match(regStrSaf)
    version = (info + '').replace(/[^0-9|_.]/ig, '').replace(/_/ig, '.')
  } else if(ua.match(/android/i)) {
    name = 'Android'
    version = ua.substr(ua.indexOf('Android') + 8, ua.indexOf(';', ua.indexOf('Android')) - ua.indexOf('Android') - 8)
  } else if(ua.match(/mac/i)) {
    name = 'Mac'
    var regStrSaf2 = /OS [\d._]*/gi
    var info2 = ua.match(regStrSaf2)
    version = (info2 + '').replace(/[^0-9|_.]/ig, '').replace(/_/ig, '.')
  } else {
    name = 'Unknown'
    version = 'Unknown'
  }

  return {
    os: name,
    version
  }
}
