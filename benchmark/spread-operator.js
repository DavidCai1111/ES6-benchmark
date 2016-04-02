'use strict'

suite('spread operator', function () {
  const noop = (a, b, c) => { };

  bench('noop(...[1,2,3])', function () {
    noop(...[1,2,3])
  })

  bench('noop.apply(null, [1,2,3])', function () {
    noop.apply(null, [1,2,3])
  })
})
