/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
	var l = [],
		len,
		addNum,
		tensAdd = 0,
		i;

	len = Math.max(l1.length, l2.length);
	console.log(len);
	for(i = 0; i < len; i++) {
		addNum = (l1[i] || 0) + (l2[i] || 0);
		console.log(addNum);
		l[i] = addNum % 10 + tensAdd;
		console.log(l[i]);
		if(addNum >= 10) {
			tensAdd = 1;
		} else {
			tensAdd = 0;
		}
		console.log(tensAdd);
	}
	if(tensAdd === 1) {
		l[len] = 1;
	}
	return l;
};

//单链表节点
function Entry(next, data) {
	this.next = next;
	this.data = data;
}
function List() {
	this.head = new Entry(null,null);
	this.end = new Entry(null,null);
	this.add = function(data) {
		var newentry = new Entry(null,data);
		if(this.head.data) {
			this.end.next = newentry;
			this.end = newentry; 
		} else {
			this.head = newentry;
			this.end = newentry;
		}
	};
	this.show=function() {
		var temp=this.head;
		for(;temp!=null;temp=temp.next) {
			console.log(temp.data);
			console.log(temp.next);
		}
	};
}
var a=new List();
a.add(1);
a.add(2);
a.add(3);
a.show();

var ListNode = function ListNode(val, next) {
	this.val = val;
	this.next = null;
};
function List() {
	this.add = function(data) {
		var newentry = new Entry(null,data);
		if(this.head.data) {
			this.end.next = newentry;
			this.end = newentry; 
		} else {
			this.head = newentry;
			this.end = newentry;
		}
	};
}