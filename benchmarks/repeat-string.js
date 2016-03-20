'use strict'
suite('string.repeat() vs use +', function () {
  const a = 'a'
  bench('string.repeat()', function () {
    a.repeat(10)
  })

  bench('use +', function () {
    a + a + a + a + a + a + a + a + a + a
  })
})
