# lodashExt

[![NPM](https://nodei.co/npm/logstash-relay.png?downloads=true)](https://nodei.co/npm/logstash-relay/)

[![Actual version published on npm](http://img.shields.io/npm/v/logstash-relay.svg)](https://www.npmjs.org/package/logstash-relay)
[![Travis build status](https://travis-ci.org/MediaXPost/logstash-relay.svg)](https://www.npmjs.org/package/logstash-relay)
[![Total npm module downloads](http://img.shields.io/npm/dt/logstash-relay.svg)](https://www.npmjs.org/package/logstash-relay)
[![Package Quality](http://npm.packagequality.com/shield/logstash-relay.svg)](http://packagequality.com/#?package=logstash-relay)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/f0adb055adc04f98941b7832bdb286ed)](https://www.codacy.com/app/chronosis/logstash-relay?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=MediaXPost/logstash-relay&amp;utm_campaign=Badge_Grade)
[![Codacy Badge](https://api.codacy.com/project/badge/Coverage/d264ea63a69a4e3899ce06d6e81f18fb)](https://www.codacy.com/app/chronosis/logstash-relay?utm_source=github.com&utm_medium=referral&utm_content=chronosis/logstash-relay&utm_campaign=Badge_Coverage)
[![Dependencies badge](https://david-dm.org/MediaXPost/logstash-relay/status.svg)](https://david-dm.org/MediaXPost/logstash-relay?view=list)
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2FMediaXPost%2Flogstash-relay.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2FMediaXPost%2Flogstash-relay?ref=badge_shield)

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
const _ = require('@mediaxpost/lodashExt');

const data = { a: 'a', b: 'b' };
// Use lodash as you normally would
console.log(_.pick(data, ['a']);
```

# [API Reference](#api)
<a name="api"></a>

## _.isUnset(value)
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

## _.hasValue(value)
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

## _.implies(a, b)
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

[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2FMediaXPost%2Flogstash-relay.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2FMediaXPost%2Flogstash-relay?ref=badge_large)
