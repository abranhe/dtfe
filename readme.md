# dtfe [![Github](https://github.com/abranhe/dtfe/workflows/build/badge.svg)](https://github.com/abranhe/dtfe) [![Travis](https://travis-ci.com/abranhe/dtfe.svg?branch=master)](https://travis-ci.com/abranhe/dtfe) [![License](https://img.shields.io/github/license/abranhe/dtfe.svg)](https://github.com/abranhe/dtfe/blob/master/license) [![npm](https://img.shields.io/npm/v/dtfe.svg?logo=npm)](https://npmjs.org/dtfe)

> Does the file exist?

## Install

```
$ npm install dtfe
```


<details>
<summary>
  Other options?
</summary>

###### npm

```
$ npm install dtfe
```

###### yarn

```
$ yarn add dtfe
```

###### Github Registry

```
$ npm install abranhe@dtfe
```

</details>

## Usage

```js
import check from 'dtfe';

console.log(check('package.json'));
//=> true
```

## API

**check(file)**

> Return a function with a boolean value checking whether a file/directory exist

## License

MIT © [Carlos Abraham](https://github.com/abranhe/)
