var findMedianSortedArrays = function(nums1, nums2) {
	var m = nums1.length,
		n = nums2.length,
		l = m + n,
		k1 = Math.ceil(m / 2) - 1,
		k2 = Math.floor(l / 2) - k1 - 1,
		move = Math.floor(l / 4),
		median,
		concatNums;
	if(m === 0 || n === 0 || nums1[m - 1] <= nums2[0] || nums1[0] >= nums2[n - 1]) {
		concatNums = nums1[0] >= nums2[n - 1] ? nums2.concat(nums1) : nums1.concat(nums2);
		if(l & 1) {
			median = concatNums[Math.floor(l / 2)];
		} else {
			median = (concatNums[Math.floor(l / 2)] + concatNums[Math.floor(l / 2) - 1]) / 2;
		}
	} else {
		do {
			if(nums1[k1] < nums2[k2]) {
				move = Math.min(Math.ceil(move / 2), m - 1 - k1, k2);
				k1 += move;
				k2 -= move;
			} else if(nums1[k1] > nums2[k2]) {
				move = Math.min(Math.ceil(move / 2), k1, n - 1 - k2);
				k1 -= move;
				k2 += move;
			} else if(nums1[k1] === nums2[k2]) {
				break;
			}
		} while(move > 1);
		if(l & 1) {
			median = Math.max(nums1[k1], nums2[k2]);
		} else {
			if(nums1[k1] < nums2[k2]) {
				median = (nums2[k2 - 1] + nums2[k2]) / 2;
			} else if(nums1[k1] < nums2[k2] && nums1[k1] > nums2[k2 - 1]) {
				median = (nums2[k2 - 1] + nums2[k2]) / 2;
			}
			if(nums1[k1] > nums2[k2] && nums1[k1] > nums2[k2 + 1]) {
				median = (nums2[k2 + 1] + nums2[k2]) / 2;
			} else if(nums1[k1] < nums2[k2] && nums1[k1] > nums2[k2 - 1]) {
				median = (nums2[k2 - 1] + nums2[k2]) / 2;
			} else {
				median = (nums1[k1] + nums2[k2]) / 2;
			}
			// k1 === 0 ? (nums1[k1] + nums2[k2]) / 2
		}
	}
	return median;
};
// case test
var testArr = [
	/*[
		[],
		[]
	],
	[
		[],
		[1]
	],
	[
		[],
		[1,2]
	],
	[
		[],
		[1,2,3]
	],
	[
		[1],
		[2]
	],
	[
		[1,2],
		[3]
	],
	[
		[4,6,7,8,9],
		[1,2,3]
	],*/
	[
		[1,4],
		[2,3]
	],
	[
		[1,2],
		[4,5]
	],
	[
		[1,2,5],
		[3,4]
	],
	[
		[1,2,5,6,7,8,9,10,12],
		[3]
	],
	[
		[1,2],
		[2,3,4]
	],
	[
		[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],
		[-15, -14, -13, -12, -11, -10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
	],
	[
		[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],
		[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
	],
	[
		[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],
		[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,24,25,26]
	],
	[
		[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],
		[-15, -14, -13, -12, -11, -10, -9, -8, -7, -6, -5, -4, -3, -2, -1, -1]
	]
];
function answer(nums1, nums2) {
	var arr = (nums1.concat(nums2)).sort(function(a, b) {if(a > b) {return 1;} else {return -1;}}),
		len = arr.length;
	if(len & 1) {
		return arr[Math.ceil(len / 2) - 1];
	} else {
		return (arr[Math.ceil(len / 2) - 1] + arr[Math.ceil(len / 2)]) / 2;
	}
}
for(var k = 0, testArrLen = testArr.length; k < testArrLen; k++) {
	// findMedianSortedArrays(testArr[k][0], testArr[k][1]);
	if(answer(testArr[k][0], testArr[k][1]) !== findMedianSortedArrays(testArr[k][0], testArr[k][1])) {
		console.log(k, answer(testArr[k][0], testArr[k][1]), findMedianSortedArrays(testArr[k][0], testArr[k][1]));
	}
}