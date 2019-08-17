/**
 *
 * Created Date: 2019-08-18, 01:23:16 (zhenliang.sun)
 * Last Modified: 2019-08-18, 02:52:24 (zhenliang.sun)
 * Email: zhenliang.sun@gmail.com
 *
 * Distributed under the MIT license. See LICENSE file for details.
 * Copyright (c) 2019 vhall
 */

/**
 * 日志
 *
 * @export
 * @class Log
 * @author zhenliang.sun
 */
export default class Log {
  static instance = null
  constructor() {
    if(Log.instance) {
      throw new Error('Log should be a singleton Class')
    }

    Log.instance = this
    this.logLevels = {
      all: 'debug|info|log|warn|error',
      off: '',
      debug: 'debug|info|log|warn|error',
      info: 'info|warn|error',
      warn: 'warn|error',
      error: 'error'
    }

    this.level = 'all' // 默认是all
  }

  static get OBJ() {
    if(!Log.instance) {
      Log.instance = new Log()
    }

    return Log.instance
  }

  /**
   *
   * 设置日志错误输出等级，开发环境通常设置为 'all', 生产环境通常设置为 'warn', 'error' 或 'off'
   * @memberof Log
   * @default 'all'
   */
  set level(val) {
    if(typeof val !== 'string') {
      return this.level
    }

    if(!this.logLevels.hasOwnProperty(val)) {
      throw new Error(`${val} is not a valid log level, should be in [all, off, debug, info, warn, error]`)
    }

    this._level = this.logLevels[val]
  }

  get level() {
    return this._level
  }

  info(...args) {
    this['_out']('info', args)
  }

  debug(...args) {
    this['_out']('debug', args)
  }

  warn(...args) {
    this['_out']('warn', args)
  }

  error(...args) {
    this['_out']('error', args)
  }

  _out(type, args) {
    if(!window.console) {
      return
    }

    let fn = window.console[type]
    if(!fn && type === 'debug') {
      fn = window.console.info || window.console.log
    }

    if(!fn || this.level.split('|').indexOf(type) < 0) {
      return
    }

    fn[Array.isArray(args) ? 'apply' : 'call'](window.console, args)
  }
}
