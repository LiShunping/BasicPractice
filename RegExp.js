var phone1 = '86+130-2104-0021~86+131-1087-1221';
var pattern1 = /(\d{2})\+((\d{3})-(\d{4}))-(\d{4})/g;
var matchs = pattern1.exec(phone1);
// console.log(matchs.$1);
// console.log(RegExp.$1);
// console.log(phone1.search(pattern1));
// console.log(phone1.match('131'));
// console.log(pattern1.exec(phone1));
function replacePattern(str, pattern) {
	return str.replace(pattern, function(match, match1, match2, match3, match4, match5, index, input) {
		console.log(match, match1, match2, match3, match4, index, input);
		return index;
	});
	// return str.replace(pattern, (/$1$2$3/));
}
function changeSnake(str) {
	return str.replace(/-([a-zA-Z])/g, function(match, match1, index, input) {
		return match1.toUpperCase();
	});
}
// console.log(replacePattern(phone1, pattern1), phone1);
console.log(changeSnake('data-source-id'));