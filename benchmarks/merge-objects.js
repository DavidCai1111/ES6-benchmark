'use strict'
suite('merge objects', function () {
  bench('Object.assign', function () {
    var a = {}
    var b = {b: 'b'}
    Object.assign(a, b)
  })

  bench('for...in loop and assign', function () {
    var a = {}
    var b = {b: 'b'}
    for (var key in b) {
      a[key] = b
    }
  })
})
