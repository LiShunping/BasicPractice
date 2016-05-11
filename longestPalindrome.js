var longestPalindrome = function(s) {
	var len = s.length,
		longestPalindromeLen = 1,
		subStr,
		reverseTail,
		start,
		end,
		foldLen,
		k,
		i,
		j;
	if(len <= 1) {
		return s;
	} else {
		for(reverseTail = 0; reverseTail < 2 * len - 1; reverseTail++) {
			start = Math.max(0, reverseTail - len + 1);
			end = Math.min(reverseTail + 1, len);
			foldLen = end - start;
			if(foldLen < longestPalindromeLen) {
				break;
			}
			// console.log(start, end, foldLen);
			for(k = start + Math.ceil(foldLen / 2) - 1; k >= start; k--) {
				if(s[k] === s[reverseTail - k]) {
					i = k;
					j = reverseTail - k;
					// console.log(k, reverseTail - k, s[k], s[reverseTail - k], i, j);
					if(longestPalindromeLen <= j + 1 - i) {
						subStr = s.slice(i, j + 1);
						// console.log(k, reverseTail - k, s[k], s[reverseTail - k], i, j, subStr);
						longestPalindromeLen = subStr.length;
					}
				} else {
					break;
				}
			}
		}
		return subStr;
	}
};
var testCaseBad = [
	'abc'
];
var testCase = [
	'',
	'a',
	'abc',
	'aba',
	'abbaa',
	'google'
];
var testArr = testCase;
for(var k = 0, testArrLen = testArr.length; k < testArrLen; k++) {
	console.log('result:' + longestPalindrome(testArr[k]));
}