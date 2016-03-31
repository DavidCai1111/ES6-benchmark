'use strict'
suite('template string vs use +', function () {
  let a = 'a'
  let b = 'b'
  let c = 3
  let d = [4]

  bench('template string', function () {
    let str = `a:${a} b:${b} c:${c} d:${d}`
  })

  bench("use +", function () {
    let str = 'a:' + a + ' b:' + b + ' c:' + c + ' d:' + 'd'
  })
})
