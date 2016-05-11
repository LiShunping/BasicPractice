var foo1, foo2, foo3, foo4;
foo1 = function() {
	var sum = 0;
	for(var i = 0, len = 179580000; i < len; i++) {
		sum += i;
	}
	return sum;
};
foo2 = function() {
	var sum = 0,
		i = 0;
	while(i < 179580000) {
		sum += i;
		i++;
	}
	return sum;
};
foo3 = function() {
	var sum = 0,
		i = 0;
	do {
		sum += i;
		i++;
	} while(i < 179580000);
	return sum;
};
foo4 = function() {
	var result = 0,
		addNum;
	addNum = function(i) {
		if(i < 17958) {
			result += i;
			addNum(i + 1);
		}
	};
	addNum(0);
};
var t0 = Date.now();
foo1();
console.log(Date.now() - t0);
t0 = Date.now();
foo2();
console.log(Date.now() - t0);
t0 = Date.now();
foo3();
console.log(Date.now() - t0);
t0 = Date.now();
foo4();
console.log(Date.now() - t0);
