
var getFile = require('./get_file.js')
,ut = require('./ut.js')

module.exports = function(source, assetPrefix, cb){
	// /url\("?'?([^\)'"]+)'?"?\)/.exec('background: #ffffff url("images/ui-bg_flat_75_ffffff_40x100.png") 50% 50% repeat-x;')
	// /url\("?'?([^\)'"]+)'?"?\)/.exec('background: #ffffff url(images/ui-bg_flat_75_ffffff_40x100.png) 50% 50% repeat-x;')
	// /url\("?'?([^\)'"]+)'?"?\)/.exec('background: #ffffff url(\'images/ui-bg_flat_75_ffffff_40x100.png\') 50% 50% repeat-x;')
	var numGetting = 0
		,re = /url\("?'?([^\)'"]+)'?"?\)/ig
		,m
	source = source.toString();
	while (m = re.exec(source)) {
		if (!m[1] || m[1].indexOf('data:') == 0)
			continue;
		++numGetting;
		(function(){
			var str = m[1]
			,filePath = str
			if (!ut.pathIsRemote(filePath))
				filePath = assetPrefix+str
			getFile(filePath, function(err,data){
				var prefix = 'data:image/'+getContentTypeFromFilename(filePath)+';base64,'
					,image
				if (err) {
					if (err.code == 'ENOENT') {
						console.warn('Missing file: '+filePath)
						return done()
					}
					console.error('Error fetching file: '+filePath)
					return done()
				}
				image = prefix+data.toString('base64')
				source = source.replace(str, image);
				done();
				function done(){
					if (--numGetting == 0)
						cb(false,source)
				}
			});
		}());
	}
}

function getContentTypeFromFilename(fn){
	var ext = fn.split('.').pop().toLowerCase();
	if (ext == 'jpg') ext = 'jpeg'
	return ext;
}

