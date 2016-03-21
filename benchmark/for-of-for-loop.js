'use strict'
suite('for...of vs for loop', function () {
  const a = new Array(10).fill(0)
  bench('for...of', function () {
    for (let elem of a) {
      elem
    }
  })

  bench('for loop, i < arr.length', function () {
    for (let i = 0; i < a.length; i++) {
      a[i]
    }
  })
})
