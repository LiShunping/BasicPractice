var tree0 = [{
	id: '0',
	parent: null,
	name: '清华附中',
	child: [ '1', '2' ]
}, {
	id: '1',
	parent: '0',
	name: '初中',
	child: [ '3', '4', '5' ]
}, {
	id: '2',
	parent: '0',
	name: '高中',
	child: [ '6', '7', '8' ]
}, {
	id: '3',
	parent: '1',
	name: '初一',
	child: [ '9', '10' ]
}, {
	id: '4',
	parent: '1',
	name: '初二',
	child: []
}, {
	id: '5',
	parent: '1',
	name: '初三',
	child: []
}, {
	id: '6',
	parent: '2',
	name: '高一',
	child: []
}, {
	id: '7',
	parent: '2',
	name: '高二',
	child: []
}, {
	id: '8',
	parent: '2',
	name: '高三',
	child: []
}, {
	id: '9',
	parent: '3',
	name: '初一1班',
	child: []
}, {
	id: '10',
	parent: '3',
	name: '初一2班',
	child: []
}];
function convert(arr) {
	var i, len, item, id, data = {}, e, rootId;
	for(i = 0, len = arr.length; i < len; i++) {
		item = arr[i];
		id = item.id;
		data[id] = {
			id: id,
			name: item.name,
			child: [],
			parent: item.parent
		};
	}
	for(i = 0; i < len; i++) {
		id = arr[i].id;
		item = data[id];
		if(item.parent) {
			data[item.parent].child.push(item);
		} else {
			rootId = id;
		}
	}
	return data[rootId];
}
convert(tree0);
function renderTree(tree, id) {
	var el, i, childNum = tree.child.length, item, ul, li;
	el = document.getElementById(id);
	if(childNum) {
		el.innerHTML = tree.name + '<ul></ul>';
		ul = el.getElementsByTagName('ul')[0];
		for(i = 0, childNum = tree.child.length; i < childNum; i++) {
			item = tree.child[i];
			li = document.createElement('li');
			li.setAttribute('id', item.id);
			ul.appendChild(li);
			renderTree(item, item.id);
		}
	} else {
		el.innerHTML = tree.name;
	}
}
var tree = convert(tree0);
document.body.innerHTML = '<li id="0"></li>';
renderTree(tree, '0');