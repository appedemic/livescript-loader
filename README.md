# LiveScript loader for webpack

## Usage

``` javascript
var exportsOfFile = require("livescript!./file.ls");
// => return exports of executed and compiled file.ls
```

Don't forget to polyfill `require` if you want to use it in node.
See `webpack` documentation.

## License

MIT (http://www.opensource.org/licenses/mit-license.php)