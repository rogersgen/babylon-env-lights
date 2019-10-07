
[![Build Status](https://secure.travis-ci.org/fluffybunnies/sext.png)](http://travis-ci.org/fluffybunnies/sext)

## Description

Simple extend (sext) emulates jQuery's $.extend except:
- undefined values are not ignored
- numeric object keys are transferred to target arrays

Optional deep extend. Silently ignores non Objects.

```
sext( [deep,] target [,obj1 [,objN]] )
```

## Sextamples

#### Copy
```
var sext = require('sext')

var pirateOg = {name: 'Pompeius'}
var pirateNb = sext({}, pirateOg)

console.log(pirateNb);
// { name: 'Pompeius' }
```

#### Extend
```
var sext = require('sext')

var f1 = new Function
f1.prototype.giveMeCheese = function(){
  return 'brie'
}

var f2 = new Function
f2.prototype.giveMeWine = function(){
  return 'zin'
}

sext(f1.prototype,f2.prototype)
var waiter = new f1()

console.log( waiter.giveMeWine() )
// 'zin'
```

#### Arrays work too
```
var sext = require('sext')

var o1 = [{color:'blue', facial_expression:'happy'}, 12]
var o2 = [{color:'pomegranate'}]

var o = sext([], o1, o2)
console.log(o)
// [ { color: 'pomegranate' }, 12 ]

var o = sext(true, [], o1, o2)
console.log(o)
//[ { color: 'pomegranate', facial_expression: 'happy' }, 12 ]
```