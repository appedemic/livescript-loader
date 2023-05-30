// Generated by LiveScript 1.5.0
var LiveScript, LoaderUtils;
LiveScript = require('livescript');
LoaderUtils = require('loader-utils');
module.exports = function(source){
  var lsRequest, jsRequest, config, query, result;
  if (typeof this.cacheable == 'function') {
    this.cacheable();
  }
  lsRequest = LoaderUtils.getRemainingRequest(this);
  jsRequest = LoaderUtils.getCurrentRequest(this);
  config = {
    filename: lsRequest,
    outputFilename: jsRequest,
    map: 'linked',
    bare: true,
    'const': false,
    header: false
  };
  query = LoaderUtils.getOptions(this);
  import$(config, query);
  result = LiveScript.compile(source, config);
  if (config.map === 'none') {
    return result;
  }
  result.map.setSourceContent(lsRequest, source);
  result.map._file = lsRequest;
  this.callback(null, result.code, JSON.parse(result.map.toString()));
};
function import$(obj, src){
  var own = {}.hasOwnProperty;
  for (var key in src) if (own.call(src, key)) obj[key] = src[key];
  return obj;
}