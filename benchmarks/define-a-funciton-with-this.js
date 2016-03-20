'use strict'
suite('define a function with inherited this', function () {
  bench('function statement', function () {
    var self = this
    var a = function () {
      self
      return '1'
    }
  })

  bench('() =>', function () {
    var a = () => {
      this
      return '1'
    }
  })
})
