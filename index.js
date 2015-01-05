var LiveScript = require('LiveScript');
var loaderUtils = require("loader-utils");

module.exports = function(source) {
	this.cacheable && this.cacheable();
	var lsRequest = loaderUtils.getRemainingRequest(this);
	var jsRequest = loaderUtils.getCurrentRequest(this);
	var query     = loaderUtils.parseQuery(this.query);

	// configure & default livescript
	var config = {
		filename: lsRequest,
		bare: true,
		const: false,
		header: false
	};
	Object.keys(query).forEach(function(attr) {
		config[attr] = query[attr];
	});

	var result = LiveScript.compile(source, config);
	this.callback(null, result);
}
module.exports.seperable = true;
