'use strict'
suite('array like object to array', function () {
  let a = {
    '0': 'a',
    '1': 'b',
    '2': 'c'
  }
  a.length = 3
  bench('Array.prototype.slice.call', function () {
    Array.prototype.slice.call(a)
  })

  bench('Array.from', function () {
    Array.from(a)
  })
})
