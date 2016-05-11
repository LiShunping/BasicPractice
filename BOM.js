var color = '#fff';
window.color = '#000';
delete color;
function getInfoFromParentFrame() {
	var search = location.search.length ? location.search.substring(1) : '',
		query = search.split('&'),
		i,
		len,
		item,
		key,
		value,
		args = {};
	for(i = 0, len = query.length; i < len; i++) {
		item = query[i].split('=');
		key = item[0];
		value = item[1];
		args[key] = value;
	}
	return args;
}