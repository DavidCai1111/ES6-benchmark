'use strict'
suite('string starts with', function () {
  let a = 'abc'
  bench('string.startsWith(value)', function () {
    a.startsWith('a', 0) === true
  })

  bench('string[0] === value', function () {
    a[0] === 'a'
  })
})
