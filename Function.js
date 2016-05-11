if(1) {
	function sayYes() {
		console.log('yes');
	}
} else {
	function sayYes() {
		console.log('no');
	}
}
function outFoo() {
	function inFoo() {
		console.log('inFoo');
	}
}
// 判断变量当前状态
function decideVarStatus() {
	try {
		// 已经声明
		// 判断是否已经定义
		if(va === undefined) { 
		// 不能使用 ==，因为当 "var va = null;"时 被判定为未定义是错误的。
		//if (typeof  va === 'undefined'){  // 这种方式也是不可取的。
			// 未定义
			window.console && console.log("变量未定义.");
		} else {
			// 已经定义了，可能为null 
			window.console && console.log("变量已定义.");
		}
	} catch(e) {
		// va 未声明
		window.console && console.log("变量未声明，");
	}
}
