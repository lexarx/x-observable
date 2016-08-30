# Observable

Observable is a JavaScript library providing observable value implementation.

## Examples

```js
var Observable = require('x-observable');

var observable = new Observable(1);
observable.changed.addListener(function(newValue, oldValue) {
	// newValue = 2, oldValue = 1
});
observable.setValue(2);
```

## Method aliases

```
getValue - get.
setValue - set.
```

## Installation

```sh
npm install --save x-observable
```