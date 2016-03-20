'use strict'
suite('declear a class', function () {
  bench('Class', function () {
    class a {
      constructor(x) {
        this.x = x
      }

      get() {return this.x}
    }
  })

  bench('use function and prototype', function () {
    function a (x) {
      this.x = x
    }

    a.prototype.get = function () {return this.x}
  })
})
