'use strict'
suite('var let const', function () {
  bench('var', function () {
    var a = 'a'
  })

  bench('let', function () {
    let a = 'a'
  })

  bench('const', function () {
    const a = 'a'
  })
})
