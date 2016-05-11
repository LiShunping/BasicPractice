var Singleton = function(name){
	this.name = name;
	// 使用instance 该标志来判断是否创建了一个实例
	this.instance = null; 
};
Singleton.prototype.getName = function(){
	console.log(this.name);
};
Singleton.getInstance = function(name) {
	if(!this.instance) {
		this.instance = new Singleton(name);
	}
	return this.instance;
}
var a = Singleton.getInstance("aa");
var b = Singleton.getInstance("bb");
console.log(a);
console.log(b);

var Singleton = function(name){
	this.name = name; 
};
Singleton.prototype.getName = function(){
	console.log(this.name);
};
Singleton.getInstance = (function(){
	var instance = null;
	return function(name){
		if(!instance) {
			instance = new Singleton(name);
		}
		return instance;
	};
})();