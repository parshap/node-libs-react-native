# node-libs-react-native

Node code modules for React Native. This is a fork of [node-libs-browser][] with minor modifications to use packages supported in React native.

[node-libs-browser]: https://www.npmjs.com/package/node-libs-browser

The node core libs for React Native.

[![dependencies status](http://david-dm.org/parshap/node-libs-react-native.png)](http://david-dm.org/parshap/node-libs-react-native)

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
| stream | [substack/stream-browserify](https://github.com/substack/stream-browserify) | --- |
| string_decoder | [rvagg/string_decoder](https://github.com/rvagg/string_decoder) | --- |
| sys | [defunctzombie/node-util](https://github.com/defunctzombie/node-util) | --- |
| timers | [jryans/timers-browserify](https://github.com/jryans/timers-browserify) | --- |
| tls | --- | [tls.js](./mock/tls.js) |
| tty | [substack/tty-browserify](https://github.com/substack/tty-browserify) | [tty.js](./mock/tty.js) |
| url | [defunctzombie/node-url](https://github.com/defunctzombie/node-url) | --- |
| util | [defunctzombie/node-util](https://github.com/defunctzombie/node-util) | --- |
| vm | [substack/vm-browserify](https://github.com/substack/vm-browserify) | --- |
| zlib | [devongovett/browserify-zlib](https://github.com/devongovett/browserify-zlib) | --- |

## Outdated versions

### `buffer`

The current `buffer` implementation uses feross/buffer@4.x because feross/buffer@5.x relies on [typed arrays](https://github.com/feross/buffer/commit/5daca86b7cd5d2b8ccb167534d47421029f639e9#commitcomment-19698936).
This will be dropped as soon as IE9 is not a typical browser target anymore.

### `punycode`

The current `punycode` implementation uses bestiejs/punycode.js@1.x because bestiejs/punycode.js@2.x requires modern JS engines that understand `const` and `let`.
It will be removed someday since it has already been [deprecated from the node API](https://nodejs.org/api/punycode.html).

## License

MIT
