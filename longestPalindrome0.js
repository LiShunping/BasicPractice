var longestPalindrome = function(s) {
	var arr = s,
		len = s.length,
		palindromeArr = [],
		LongestPalindromeLen = 1,
		subStr,
		i,
		j,
		k;
	if(len <= 1) {
		return s;
	} else {
		for(i = 0; i < len; i++) {
			for(j = len - 1; j >= 0; j--) {
				// 把subStr的返回值作为判段条件，排除长度小于subStr的字符串判段
				if(arr[i] === arr[j] && i !== j) {
					// 使用二分法判断先排除，降低复杂度
					// 减少k的遍历范围到一半
					// 如果已经返回最长值，则不再比较短值
					for(k = i; k < len; k++) {
						if(arr[k] === arr[j - k + i]) {
							palindromeArr.push(arr[k]);
						} else {
							break;
						}
					}
					subStr = palindromeArr.length >= LongestPalindromeLen ? palindromeArr.join('') : subStr;
					LongestPalindromeLen = subStr.length;
					palindromeArr = [];
				} else if(i === j) {
					subStr = LongestPalindromeLen === 1 ? arr[i] : subStr;
					LongestPalindromeLen = subStr.length;
				}
			}
		}
		return subStr;
	}
};
var testCaseBad = [
	'ab'
];
var testCase = [
	'',
	'a',
	'abc',
	'aba',
	'abbaa',
	'google'
];
var testArr = testCaseBad;
for(var k = 0, testArrLen = testArr.length; k < testArrLen; k++) {
	longestPalindrome(testArr[k]);
	console.log('result:' + longestPalindrome(testArr[k]));
}