# lodashExt

[![NPM](https://nodei.co/npm/@mediaxpost/lodashext.png?downloads=true)](https://nodei.co/npm/@mediaxpost/lodashext/)

[![Actual version published on npm](http://img.shields.io/npm/v/@mediaxpost/lodashext.svg)](https://www.npmjs.org/package/@mediaxpost/lodashext)
[![Travis build status](https://travis-ci.org/MediaXPost/lodashExt.svg)](https://www.npmjs.org/package/@mediaxpost/lodashext)
[![Total npm module downloads](http://img.shields.io/npm/dt/@mediaxpost/lodashext.svg)](https://www.npmjs.org/package/@mediaxpost/lodashext)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/198aa1923d284affae5516a3563ce2d5)](https://www.codacy.com/app/chronosis/lodashExt?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=MediaXPost/lodashExt&amp;utm_campaign=Badge_Grade)
[![Codacy Coverage Badge](https://api.codacy.com/project/badge/Coverage/198aa1923d284affae5516a3563ce2d5)](https://www.codacy.com/app/chronosis/lodashExt?utm_source=github.com&utm_medium=referral&utm_content=MediaXPost/lodashExt&utm_campaign=Badge_Coverage)
[![Dependencies badge](https://david-dm.org/MediaXPost/lodashext/status.svg)](https://david-dm.org/MediaXPost/lodashext?view=list)


Simple and useful utility extensions for Lodash.

<a name="installation"></a>
# [Installation](#installation)

```shell
  npm install @mediaxpost/lodashExt
```

<a name="usage"></a>
# [Usage](#usage)
lodashExt replaces and extends lodash, so it only the lodashExt module needs to be included in your code:

```js
  const _ = require('@mediaxpost/lodashext');

  const data = { a: 'a', b: 'b' };
  // Use lodash as you normally would
  console.log(_.pick(data, ['a']);
```

<a name="api"></a>
# [API Reference](#api)

## _.isUnset(value) &#x27fe; boolean
Tests if the value provided is `null` or `undefined`

```js
  _.isUnset(null);
  _.isUnset(undefined);
  _.isUnset(false);
```

**Results**:
```
  true
  true
  false
```

## _.hasValue(value) &#x27fe; boolean
Tests if the value provided is not `null` or `undefined`

```js
  _.hasValue(null);
  _.hasValue(undefined);
  _.hasValue(false);
```

**Results**:
```
  false
  false
  true
```

## _.implies(a, b) &#x27fe; boolean
Test the logic imply operation a => b, providing the following truth table:

| A | B | Result |
| - | - | ------ |
| T | T | T |
| T | F | F |
| F | T | T |
| F | F | T |

## _.bool(value) &#x27fe; boolean
Coerces the `value` provided to a boolean value.

```js
  _.bool(false);
  _.bool(0);
  _.bool(0.0);
  _.bool('');
  _.bool(null);
  _.bool(undefined);
  _.bool(true);
  _.bool(1);
  _.bool(3.14);
  _.bool('abcd');
  _.bool([]);
  _.bool({});
  _.bool(() => {}));
```

**Results**:
```
  false
  false
  false
  false
  false
  false
  true
  true
  true
  true
  true
  true
  true
```

<a name="license"></a>
# [License](#license)

Copyright (c) 2018,2019 Jay Reardon -- Licensed under the MIT license.
