# lodashExt

[![NPM](https://nodei.co/npm/@mediaxpost/lodashext.png?downloads=true)](https://nodei.co/npm/@mediaxpost/lodashext/)

[![Actual version published on npm](http://img.shields.io/npm/v/@mediaxpost/lodashext.svg)](https://www.npmjs.org/package/@mediaxpost/lodashext)
[![Travis build status](https://travis-ci.org/MediaXPost/lodashExt.svg)](https://www.npmjs.org/package/@mediaxpost/lodashext)
[![Total npm module downloads](http://img.shields.io/npm/dt/@mediaxpost/lodashext.svg)](https://www.npmjs.org/package/@mediaxpost/lodashext)
[![Package Quality](http://npm.packagequality.com/badge/@mediaxpost/lodashext.png)](http://packagequality.com/#?package=@mediaxpost/lodashext)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/198aa1923d284affae5516a3563ce2d5)](https://www.codacy.com/app/chronosis/lodashExt?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=MediaXPost/lodashExt&amp;utm_campaign=Badge_Grade)
[![Dependencies badge](https://david-dm.org/MediaXPost/lodashext/status.svg)](https://david-dm.org/MediaXPost/lodashext?view=list)


Simple and useful utility extensions for Lodash.

# [Installation](#installation)
<a name="installation"></a>

```shell
npm install @mediaxpost/lodashExt
```

# [Usage](#usage)
<a name="usage"></a>
lodashExt replaces and extends lodash, so it only the lodashExt module needs to be included in your code:

```js
const _ = require('@mediaxpost/lodashext');

const data = { a: 'a', b: 'b' };
// Use lodash as you normally would
console.log(_.pick(data, ['a']);
```

# [API Reference](#api)
<a name="api"></a>

## _.isUnset(value) ⇒ boolean
Tests if the value provided is `null` or `undefined`

```js
_.isUnset(null);
_.isUnset(undefined);
_.isUnset(false);
```

**Output**:
```
true
true
false
```

## _.hasValue(value) ⇒ boolean
Tests if the value provided is not `null` or `undefined`

```js
_.hasValue(null);
_.hasValue(undefined);
_.hasValue(false);
```

**Output**:
```
false
false
true
```

## _.implies(a, b) ⇒ boolean
Test the logic imply operation a => b, providing the following truth table:

| A | B | Result |
| - | - | ------ |
| T | T | T |
| T | F | F |
| F | T | T |
| F | F | T |

# [License](#license)
<a name="license"></a>

Copyright (c) 2018 Jay Reardon -- Licensed under the MIT license.
