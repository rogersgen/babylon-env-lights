
module.exports = sext;

function sext(/*deep,o1,o2,etc*/){
	var deep = arguments[0] === true
		,o1 = arguments[deep?1:0],o2,i
	;
	for (i=deep?2:1;i<arguments.length;++i) {
		o2 = arguments[i]
		if (!(typeof o2 === 'object' && o2 !== null))
			continue
		if (!(typeof o1 === 'object' && o1 !== null))
			o1 = Array.isArray(o2) ? [] : {}
		Object.keys(o2).forEach(function(k){
			o1[k] = deep && o2[k] instanceof Object ? sext(true,o1[k],o2[k]) : o2[k]
		})
	}
	return (typeof(o1) === 'object' && o1 !== null) ? o1 : {}
}
