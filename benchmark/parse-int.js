'use strict'
suite('global.parseInt() vs Number.parseInt()', function () {
  bench('global.parseInt()', function () {
    parseInt('10', 10)
  })

  bench('Number.parseInt()', function () {
    Number.parseInt('10', 10)
  })
})
