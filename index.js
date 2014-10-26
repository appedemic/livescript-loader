var LiveScript = require('LiveScript');
var loaderUtils = require("loader-utils");

module.exports = function(source) {
	this.cacheable && this.cacheable();
	var lsRequest = loaderUtils.getRemainingRequest(this);
	var jsRequest = loaderUtils.getCurrentRequest(this);
	var result = LiveScript.compile(source, {
		filename: lsRequest,
		bare: true,
		const: false,
    header: false
	});
	this.callback(null, result);
}
module.exports.seperable = true;
