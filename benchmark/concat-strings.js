'use strict'
suite('template string vs use +', function () {
  let a = 'a'
  let b = 'b'
  bench('${a}${b}', function () {
    let str = `${a}${b}`
  })

  bench('a + b', function () {
    let str = a + b
  })
})
