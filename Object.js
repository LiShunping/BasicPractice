var creatPerson = function(name, age) {
	var o = new Object();
	o.name = name;
	o.age = age;
	o.sayName = function() {
		console.log(this.name);
	};
	return o;
};
var p1 = creatPerson('lsp', 27);
var Person = function(name, age) {
	this.name = name;
	this.age = age;
	this.sayName = function() {
		console.log(this.name);
	};
};
var Teacher = function() {
};
Teacher.prototype = {
	name: 'lsp',
	age: 0,
	sayName: function() {
		console.log(this.name);
	}
};
var p2 = creatPerson('lsp', 27);
var PersonAge = function(age) {
	return {
		age: age
	};
};
function Person(name, age) {
	this.name = name;
	this.age = age;
	this.sayName = function() {
		console.log(this.name);
	};
}
Person.prototype.sayAge = function() {
	console.log(this.age);
};
var Student = function(name, age, id) {
	var student = new Person(name, age);
	student.id = id;
	return student;
};
Student.prototype = new Person();
Student.prototype.sayId = function() {
	console.log(this.id);
};
function SpecialArray() {
	var values = [];
	values.push.apply(values, arguments);
	values.getArrayString = function() {
		return this.join('!');
	};
	return values;
}
function SpecialArr() {
	var values = [];
	values.push.apply(values, arguments);
	this.getArrayString = function() {
		return values.join('!');
	};
}
function Student(name, age) {
	this.name = name;
	this.age = age;
}
Student.prototype = {
	constructor: Student,
	identify: 'student',
	sayName: function() {
		console.log(this.name);
	},
	sayAge: function() {
		console.log(this.age);
	}
};
function Girl(name, age) {
	this.name = name;
	this.age = age;
	if(!this.sayName) {
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

function Girl(name, age) {
	this.name = name;
	this.age = age;
	if(typeof this.sayName !== 'function') {
		Girl.prototype.identify = 'girl';
		Girl.prototype.sayName = function() {
			console.log(this.name);
		};
		/*Girl.prototype = {
			constructor: Girl,
			identify: 'Girl',
			sayName: function() {
				console.log(this.name);
			},
			sayAge: function() {
				console.log(this.age);
			}
		};*/
	}
}

function creatChain() {
	var arr = [];
	arr = arr.concat.apply(arr, arguments);
	arr.toSpecialString = function() {
		return arr.join('|');
	};
	return arr;
}

function safePerson(name, age, id) {
	var person = {};
	person.name = name;
	person.age = age;
	person.sayOrigal = function() {
		console.log(name, age);
	}
	person.sayId = function() {
		console.log(id);
	}
	return person;
}

function Super(name, age) {
	this.name = name;
	this.age = age;
	this.sayName = function() {
		console.log(this.name);
	};
}
function Sub(type) {
	this.type = type;
}
Sub.prototype = new Super('sub', 0);
Sub.prototype.constructor = Sub;

function Super(name, age) {
	this.name = name;
	this.age = age;
	this.sayName = function() {
		console.log(this.name);
	};
}
function Sub(name, age, type) {
	Super.call(this, name, age);
	this.type = type;
}

function Super(name, age) {
	this.name = name;
	this.age = age;
	this.sayName = function() {
		console.log(this.name);
	};
}
function Sub(name, age, type) {
	var o = new Super(name, age);
	o.type = type;
	return o;
}

function Super(name, age) {
	this.name = name;
	this.age = age;
	this.sayName = function() {
		console.log(this.name);
	};
}
function Sub(name, age, type) {
	Super.call(this, name, age);
	this.type = type;
}
Sub.prototype = new Super();
Sub.prototype.sayType = function() {
	console.log(this.type);
};

function Brother(bigBrother) {
	var F = function() {};
	F.prototype = bigBrother;
	return new F();
}
var b1 = {
	name: 'Brother',
	age: 20,
	sayName: function() {
		console.log(this.name);
	}
};
var b2 = Brother(b1);
var b3 = Object.create(b1);

function Brother(bigBrother) {
	var o = (function() {
		var F = function() {};
		F.prototype = bigBrother;
		if(typeof F.prototype.sayAge !== 'function') {
			F.prototype.sayAge = function() {
				console.log(this.age);
			};
		};
		return new F();
	})();
	o.sayHi = function() {
		console.log('Hi');
	};
	return o;
}

function Super(name, age) {
	this.name = name;
	this.age = age;
	if(typeof Super.prototype.sayName !== 'function') {
		Super.prototype.sayName = function() {
			console.log(this.name);
		}
	}
}
function Sub(name, age, type) {
	Super.call(this, name, age);
	this.type = type;
}
Sub.prototype = Object.create(Super.prototype);
Sub.prototype.constructor = Sub;
Sub.prototype.sayType = function() {
	console.log(this.type);
}

function Person(name, age) {
	this.name = name;
	this.age = age;
	if(typeof Person.prototype.sayName !== 'function') {
		Person.prototype.sayName = function() {
			console.log(this.name);
		};
	}
}
function Person(name, age) {
	this.name = name;
	this.age = age;
	if(typeof Person.prototype.sayName !== 'function') {
		Person.prototype = {
			constructor: Person,
			sayName: function() {
				console.log(this.name);
			}
		}
	}
}
// 对象冒充实现继承
function Super(name) {
	this.name = name;
	this.sayName = function() {
		console.log(this.name);
	};
}
function Sub(name, age) {
	this.parent = Super;
	this.parent(name);
	delete this.parent;
	this.age = age;
	this.sayAge = function() {
		console.log(this.age);
	};
}