var reverse = function(x) {
	var len = x > 0 ? x.toString().length : x.toString().length - 1,
		i,
		reverseNum = 0;
	for(i = 1; i <= len; i++) {
		reverseNum += ((x % Math.pow(10, i)) / Math.pow(10, i - 1)) * Math.pow(10, len - i);
	}
	return reverseNum;
};
var reverse = function(x) {
	var len = x > 0 ? x.toString().length : x.toString().length - 1,
		i,
		mod,
		base,
		reverseNum = 0;
	for(i = 1; i <= len; i++) {
		base = Math.pow(10, i);
		mod = x % base;
		reverseNum += ((mod / base) * Math.pow(10, len - i + 1);
		x -= mod;
	}
	return reverseNum;
};