# at
Access nested keys in json objects without worrying about undefined / null errors

## Install
```node
npm install v-at
```

### Example

```javascript
var at = require('v-at');

var object = {
  a: 10,
  b: "hello",
  c: [
    {y: 10}, {y: 20}, {y: 30}
  ],
  d: {
    e: 10,
    f: 20
  }
};

var y = at(object, 'c.0.y'); // 10

var f = at(object, 'd.f'); // 20

var undef = at(object, 'z.u.v'); //undefined
```
