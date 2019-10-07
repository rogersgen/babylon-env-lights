/*
node bin/cli.js -f ./test/lib.css -p http://code.jquery.com/ui/1.11.2/themes/smoothness
node bin/cli.js -f /Users/ahulce/Dropbox/Beachmint/base64-css/test/lib.css -p http://code.jquery.com/ui/1.11.2/themes/smoothness
node bin/cli.js -f http://code.jquery.com/ui/1.11.2/themes/smoothness/jquery-ui.css
node bin/cli.js -f http://code.jquery.com/ui/1.11.2/themes/smoothness/jquery-ui.css ~/Downloads/
*/

var argv = require('minimist')(process.argv.slice(2))
,baser = require('../')
,fs = require('fs')
,path = require('path')

var filePath = argv.f
,assetPrefix = argv.p
//,targetDir = argv._ && argv._[0] || './'
targetDir = argv._ && argv._[0] || path.dirname(filePath)

console.log(['filePath: '+filePath, 'assetPrefix: '+assetPrefix, 'targetDir: '+targetDir].join('\n'), '\n');

baser(filePath, assetPrefix, function(err, parsedSource){
	if (err)
		return console.log('error', err);
	var targetFile = path.join(targetDir, path.basename(filePath));
	fs.writeFile(targetFile, parsedSource, function(err){
		if (err)
			return console.log('error', err);
		console.log('all done.');
		console.log(targetFile);
	});
});


