# node-libs-react-native

Node code modules for React Native. This is a fork of [node-libs-browser][] with minor modifications to use packages supported in React Native.

[node-libs-browser]: https://www.npmjs.com/package/node-libs-browser

[![dependencies status](http://david-dm.org/parshap/node-libs-react-native.png)](http://david-dm.org/parshap/node-libs-react-native)

## Installation

```
npm install --save node-libs-react-native
```

## Usage

Exports a hash [object] of absolute paths to each lib, keyed by lib names. Modules without React Native replacements are `null`.

Some modules have mocks in the `mock` directory. These are replacements with minimal functionality.

| lib name | React Native implementation | mock implementation |
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
| vm | --- | --- |
| zlib | [devongovett/browserify-zlib](https://github.com/devongovett/browserify-zlib) | --- |

## Other Modules

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

## Globals

React Native does have certain globals that modules may expect
(`Buffer`, `process`, etc.). The
[`node-libs-react-native/globals`][globals] module in this package will
shim the global environment to add these globals.  Simply require (or
import) this module in your app before anything else.

[globals]: ./globals.js

```js
require('node-libs-react-native/globals');
```

## Credit

This is a fork of [node-libs-browser][] with minor modifications. Thanks
to [the contributors there][node-libs-browser contribs] for having done
most of the work.

[node-libs-browser contribs]: https://github.com/webpack/node-libs-browser/graphs/contributors

## License

MIT
