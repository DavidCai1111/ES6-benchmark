'use strict'
suite('string starts with', function () {
  let a = 'abcdefghijklmnopqrstuvwxyz1234567890'
  bench('string.startsWith(value)', function () {
    a.startsWith('abcdefg')
  })

  bench('use regexp', function () {
    /^abcdefg/.test(a)
  })
})
