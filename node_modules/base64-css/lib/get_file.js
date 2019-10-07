
var fs = require('fs')
,httpGet = require('./http_get')
,ut = require('./ut')


module.exports = function(filePath, cb){
	if (ut.pathIsRemote(filePath)) {
		httpGet(filePath, function(err,data){
			if (err)
				return cb(err);
			cb(false, data);
		});
	} else {
		fs.readFile(filePath, function(err,data){
			if (err)
				return cb(err);
			cb(false, data);
		});
	}
}


