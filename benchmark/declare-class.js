'use strict'
suite('declare a class', function () {
  bench('class statement', function () {
    class a {
      constructor(x) {
        this.x = x
      }

      get() {return this.x}
    }

    new a(1).get()
  })

  bench('use function and prototype', function () {
    function a (x) {
      if (!(this instanceof a)) throw new TypeError("Class constructor a cannot be invoked without 'new'")
      this.x = x
    }

    Object.defineProperty(a.prototype, 'get', {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function get() {return this.x}
    })

    new a(1).get()
  })
})
