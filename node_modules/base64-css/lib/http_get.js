
var http = require('http')

module.exports = function(url,cb){
	var buf = new Buffer(0)
	var done = function(){
		cb.apply(null,arguments);
		cb = function(){}
	}
	http.get(url,function(res){
		res.on('data',function(data){
			buf = Buffer.concat([buf,data])
		})
		.on('end',function(){
			done(false,buf)
		})
		.on('error',function(err){
			done(err)
		})
	})
	.on('error',function(err){
		done(err)
	})
}

