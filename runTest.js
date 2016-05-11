var foo = 1;
function test() {
	console.log(foo);
	var foo = 2;
	console.log(this.foo);
	console.log(this === window);
	this.foo = 3;
	console.log(this.foo);
}
test();