'use strict'
suite('for...of vs forEach', function () {
  const a = new Array(50).fill(0)
  bench('for...of', function () {
    for (let elem of a) {
      elem
    }
  })

  bench('Array#forEach', function () {
    a.forEach(function(elem) {
      elem
    })
  })
})
