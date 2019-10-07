
module.exports.pathIsRemote = function(filePath){
	return /^https?:\/\//.test(filePath)
}
