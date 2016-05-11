var absNumSort = function(nums) {
	var len = nums.length,
		i = len - 1,
		j,
		item;
	for(; i >= 0; i--) {
		if((nums[i]) < Math.abs(nums[0])) {
			nums.splice(i + 1, 0, nums[0]);
			nums.shift();
		}
	}
	return nums;
}
var absNumSort1 = function(nums) {
	var len = nums.length,
		i = 0,
		j = len - 1,
		k,
		absArr = [];
	for(k = 0; k < len && i <= j; k++) {
		if(Math.abs(nums[i]) < Math.abs(nums[j])) {
			absArr.unshift(nums[j]);
			j--;
		} else {
			absArr.unshift(nums[i]);
			i++;
		}
	}
	return absArr;
}
var testArr = [
	[0],
	[-1,0,1],
	[-3,-2,-0.5,0,1,2,3,4]
];
for(var k = 0, caseLen = testArr.length; k < caseLen; k++) {
	console.log(absNumSort(testArr[k]));
}