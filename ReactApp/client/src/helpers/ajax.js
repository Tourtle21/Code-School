var $ = require('jquery');

var ajax = function(url, data, type='POST') {
	
	return $.ajax({
		url: 'http://localhost:8999' + url,
		datatype: 'json',
		contentType: 'application/json',
		type: type,
		data: JSON.stringify(data);
	})
}	