function Girl(name, age) {
	this.name = name;
	this.age = age;
	if(typeof this.sayName !== 'function') {
		/*Girl.prototype.identify = 'girl';
		Girl.prototype.sayName = function() {
			console.log(this.name);
		};*/
		Girl.prototype = {
			constructor: Girl,
			identify: 'Girl',
			sayName: function() {
				console.log(this.name);
			},
			sayAge: function() {
				console.log(this.age);
			}
		};
	}
}
Girl('Andy', 21);
/*var g = new Girl('Andy', 21);
g.sayName();*/