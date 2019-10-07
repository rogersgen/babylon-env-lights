/*

*/
var fs = require('fs')
,path = require('path')
,getFile = require('./lib/get_file')
,parseSource = require('./lib/parse_source')

module.exports = function(filePath, assetPrefix, callback){
	if (typeof assetPrefix == 'function') {
		callback = assetPrefix;
		assetPrefix = null;
	}
	if (!assetPrefix)
		assetPrefix = path.dirname(filePath);
	if (assetPrefix[assetPrefix.length-1] != '/')
		assetPrefix += '/';

	getFile(filePath, function(err,data){
		if (err)
			return callback(err);
		parseSource(data, assetPrefix, callback);
	});
}




