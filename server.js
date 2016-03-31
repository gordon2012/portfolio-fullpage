var express = require('express');
var app = module.exports = express();

if(app.get('env') === 'development') {
	app.use(require('connect-livereload')());
}

app.use(express["static"](__dirname + "/dist"));

if(!module.parent) {
	var port = 3000;
	app.listen(port);
	console.log("Express app started on port " + port);
}
