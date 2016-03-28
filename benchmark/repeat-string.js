'use strict'
suite('String#repeat() vs polyfill', function () {
  const a = 'abcd'

  bench('String#repeat', function () {
    a.repeat(100)
  })

  bench('use Array#join trick', function () {
    new Array(100 + 1).join(a)
  })
})
