'use strict'
const Bluebird = require('bluebird')

suite('promise vs bluebird', function () {
  bench('promise', function (next) {
    Promise.resolve(1)
      .then((res) => {
        res
        next()
      })
  })

  bench('bluebird', function (next) {
    Bluebird.resolve(1)
      .then((res) => {
        res
        next()
      })
  })
})
