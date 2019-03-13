/**
 * UUID类
 *
 * @class UUID
 * @author zhenliang.sun
 */
class UUID {
  static create() {
    var d = new Date().getTime()
    var uuid = 'xxxxx'.replace(/[xy]/g, function (c) {
      var r = (d + Math.random() * 16) % 16 | 0
      d = Math.floor(d / 16)
      return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16)
    })
    return uuid
  }
}

module.exports = UUID
