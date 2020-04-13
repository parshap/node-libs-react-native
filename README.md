# node-libs-react-native

This package provides React Native compatible implementations of Node core modules like `stream` and `http`. This is a fork of [node-libs-browser][] with a few packages swapped to be compatible in React Native.

[node-libs-browser]: https://www.npmjs.com/package/node-libs-browser

## Installation

```
npm install --save node-libs-react-native
```

## Usage

This package exports a mapping of absolute paths to each module implementation, keyed by module name. Modules without React Native compatible implementations are `null`.

These modules can be used with React Native Packager's `metro.config.js` or Webpack's `resolve.alias`.

### Usage with React Native Packager

Add a `metro.config.js` file in the root directory of your React Native project and set `resolver.extraNodeModules`:

```js
// metro.config.js
module.exports = {
  resolver: {
    extraNodeModules: require('node-libs-react-native'),
  },
};
```

For more information, see this post on [Node core modules in React Native][post].

[post]: https://gist.github.com/parshap/e3063d9bf6058041b34b26b7166fd6bd

### Globals

Node has certain globals that modules may expect, such as `Buffer` or `process`. React Native does not provide these globals. The [`node-libs-react-native/globals`][globals] module in this package will shim the global environment to add these globals. Just require (or import) this module in your app before anything else.

[globals]: ./globals.js

```js
require('node-libs-react-native/globals');
// ...
require('./app.js');
```

## Modules

The following are the module implementations provided by this package. Some modules also have a "mock" implementation provided in the `mock` directory. These are replacements with minimal functionality.

| Module | RN-compatible | Mock |
|:--------:|:----------------------:|:-------------------:|
| assert | [defunctzombie/commonjs-assert](https://github.com/defunctzombie/commonjs-assert) | --- |
| buffer | [feross/buffer](https://github.com/feross/buffer) | [buffer.js](./mock/buffer.js) |
| child_process | --- | --- |
| cluster | --- | --- |
| console | [Raynos/console-browserify](https://github.com/Raynos/console-browserify) | [console.js](./mock/console.js) |
| constants | [juliangruber/constants-browserify](https://github.com/juliangruber/constants-browserify) | --- |
| crypto | [mvayngrib/react-native-crypto](https://github.com/mvayngrib/react-native-crypto) | --- |
| dgram | --- | --- |
| dns | --- | [dns.js](./mock/dns.js) |
| domain | [bevry/domain-browser](https://github.com/bevry/domain-browser) | --- |
| events | [Gozala/events](https://github.com/Gozala/events) | --- |
| fs | --- | --- |
| http | [jhiesey/stream-http](https://github.com/jhiesey/stream-http) | --- |
| https | [substack/https-browserify](https://github.com/substack/https-browserify) | --- |
| module | --- | --- |
| net | --- | [net.js](./mock/net.js) |
| os | [CoderPuppy/os-browserify](https://github.com/CoderPuppy/os-browserify) | --- |
| path | [substack/path-browserify](https://github.com/substack/path-browserify) | --- |
| process | [shtylman/node-process](https://github.com/shtylman/node-process) | [process.js](./mock/process.js) |
| punycode | [bestiejs/punycode.js](https://github.com/bestiejs/punycode.js) | --- |
| querystring | [mike-spainhower/querystring](https://github.com/mike-spainhower/querystring) | --- |
| readline | --- | --- |
| repl | --- | --- |
| stream | [nodejs/readable-stream](https://github.com/nodejs/readable-stream) | --- |
| string_decoder | [rvagg/string_decoder](https://github.com/rvagg/string_decoder) | --- |
| sys | [defunctzombie/node-util](https://github.com/defunctzombie/node-util) | --- |
| timers | [jryans/timers-browserify](https://github.com/jryans/timers-browserify) | --- |
| tls | --- | [tls.js](./mock/tls.js) |
| tty | [substack/tty-browserify](https://github.com/substack/tty-browserify) | [tty.js](./mock/tty.js) |
| url | [defunctzombie/node-url](https://github.com/defunctzombie/node-url) | --- |
| util | [defunctzombie/node-util](https://github.com/defunctzombie/node-util) | --- |
| vm | --- | [vm.js](./mock/vm.js) |
| zlib | [devongovett/browserify-zlib](https://github.com/devongovett/browserify-zlib) | --- |

## Other React Native Modules

These are other React Native packages that implement Node core related
modules. They are not included in node-libs-react-native, but you may
find them useful separately.

### `dgram`

[react-native-udp][] implements Node's `dgram` API, but is not included
here due to its native implementation and need to use `react-native
link`.

[react-native-udp]: https://github.com/tradle/react-native-udp

### `fs`

[react-native-fs][] implement's Node's `fs` API, but is not included
here due to its native implementation and need to use `react-native
link`.

[react-native-fs]: https://github.com/itinance/react-native-fs

[react-native-level-fs][] provides an alternative pure JavaScript
implementation, using AsyncStorage as the underlying storage mechanism.

[react-native-level-fs]: https://github.com/tradle/react-native-level-fs

### `net`

[react-native-tcp][] implement's Node's `net` API, but is not included
here due to its native implementation and need to use `react-native
link`.

[react-native-tcp]: https://github.com/PeelTechnologies/react-native-tcp

## Credit

This is a fork of [node-libs-browser][] with minor modifications and packages swapped out for React Native implementations. Thanks to those package authors for doing the hard work.

## License

MIT
