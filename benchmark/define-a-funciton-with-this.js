'use strict'
suite('define a function with inherited this', function () {
  bench('function statement with self = this', function () {
    var self = this
    var a = function () {
      self
      return '1'
    }

    a();
  })
  bench('function statement with bind', function () {
    var a = function () {
      this
      return '1'
    }.bind(this);

    a();
  })

  bench('arrow function () =>', function () {
    var a = () => {
      this
      return '1'
    }

    a();
  })
})
