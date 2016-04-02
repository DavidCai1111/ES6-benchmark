# ES6-benchmark

A benchmark for some popular ES6 features in Node.js 5.10.0 and Node-chakracore 6.0.0-pre5.

## Run Benchmark

```
npm run benchmark
```

## Env

 - CPU: Intel Core(TM) i5-2410M 2.30GHz
 - Memory: 8GB 1600 MHz DDR3
 - Node.js: 5.10.0 / Node-chakracore 6.0.0-pre5

## Contributor

 - [Brooooooklyn](https://github.com/Brooooooklyn)
 - [CarterLi](https://github.com/CarterLi)
 - [jucrouzet](https://github.com/jucrouzet)

## Benchmark

[concat-strings.js](benchmarks/concat-strings.js)

```
V8:
template string vs use +
  1,524,602 op/s » template string
  1,391,110 op/s » use +

Chakra:
template string vs use +
  2,316,501 op/s » template string
  2,277,366 op/s » use +
```

[for-of-for-loop.js](benchmarks/for-of-for-loop.js)

```
V8:
for...of vs forEach
  260,761 op/s    » for...of
  210,823 op/s    » Array#forEach

Chakra:
for...of vs forEach
  276,133,193 op/s  » for...of
  695,715,320 op/s  » Array#forEach
```

[merge-objects.js](benchmarks/merge-objects.js)

```
V8:
merge objects
    314,921 op/s  » Object.assign
  3,854,182 op/s  » for...in loop and assign

Chakra:
merge objects
  2,263,889 op/s  » Object.assign
  1,647,837 op/s  » for...in loop and assign
```

[declear-class.js](benchmarks/declear-class.js)

```
V8:
declear a class
  47,864 op/s  » class statement
  42,662 op/s  » use function and prototype

Chakra:
declear a class
  191,705 op/s » class statement
  201,991 op/s » use function and prototype
```

[repeat-string.js](benchmarks/repeat-string.js)

```
V8:
String#repeat() vs polyfill
  7,774,842 op/s  » String#repeat
    222,137 op/s  » use Array#join trick

Chakra:
String#repeat() vs polyfill
  1,674,259 op/s  » String#repeat
   169,631 op/s   » use Array#join trick
```

[spread-operator](benchmarks/spread-operator.js)

```
V8:
spread operator
   1,042,842 op/s » noop(...[1,2,3])
  12,241,137 op/s » noop.apply(null, [1,2,3])

Chakra:
spread operator
  3,409,259 op/s  » noop(...[1,2,3])
  5,406,631 op/s  » noop.apply(null, [1,2,3])
```

[array-like-to-array.js](benchmarks/array-like-to-array.js)

```
V8:
array like object to array
  1,453,649 op/s » Array.from
    562,458 op/s » Array.prototype.slice.call

Chakra:
array like object to array
  1,994,649 op/s » Array.from
  2,897,458 op/s » Array.prototype.slice.call
```

[promise-bluebird.js](benchmarks/promise-bluebird.js)

```
promise vs bluebird
V8:
    322,534 op/s » promise
  1,763,186 op/s » bluebird

Chakra:
   93,534 op/s » promise
  205,186 op/s » bluebird
```

[var-let-const.js](benchmarks/var-let-const.js)

```
V8:
var let const
  134,028,614 op/s » let
  132,193,000 op/s » const
  438,460,321 op/s » var

Chakra:
var let const
  168,028,614 op/s » let
  171,193,000 op/s » const
  153,460,321 op/s » var
```

[string-start-with.js](benchmarks/string-start-with.js)

```
V8:
string starts with
  10,774,987 op/s » string.startsWith(value)
  15,127,611 op/s » use regexp

Chakra:
string starts with
  30,774,987 op/s » string.startsWith(value)
  12,127,611 op/s » use regexp
```

[define-a-funciton-with-this.js](benchmarks/define-a-funciton-with-this.js)

```
V8:
define a function with inherited this
  28,661,143 op/s » function statement with self = this
     479,220 op/s » function statement with bind
  26,874,220 op/s » arrow function () =>

Chakra:
define a function with inherited this
  62,661,143 op/s » function statement with self = this
   6,874,220 op/s » function statement with bind
  61,237,253 op/s » arrow function () =>
```

[parse-int.js](benchmarks/parse-int.js)

```
V8:
global.parseInt() vs Number.parseInt()
  53,940,634 op/s  » Number.parseInt()
  81,509,873 op/s  » global.parseInt()

Chakra:
global.parseInt() vs Number.parseInt()
  23,940,634 op/s  » Number.parseInt()
  24,509,873 op/s  » global.parseInt()
```
