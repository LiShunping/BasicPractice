function comparePower(n, start, basic) {
	var powerArr = [], sumArr = [], item = start, i;
	powerArr.push(start);
	sumArr.push(0);
	for(i = 1; i < n && item < 1; i++) {
		sumArr.push(sumArr[i - 1] + item);
		item = start * Math.pow(basic, i);
		powerArr.push(item);
	}
	return {
		powerArr: powerArr,
		sumArr: sumArr
	};
}

console.table(comparePower(10, 1 / 8, 3 / 2));