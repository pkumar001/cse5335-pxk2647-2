var express = require("express");
var app = express();
var path = require('path');
var mysql = require('mysql');

var connection = mysql.createConnection({
	host		:	'us-cdbr-iron-east-03.cleardb.net',
	user		:	'b8f4b6800cf594',
	password	:	'12bf6438',
	database	:	'heroku_d13249999d229ea'
});

app.set('port', (process.env.PORT || 5000))

app.get('/data', function(request, response) {
connection.query('SELECT * FROM heroku_d13249999d229ea.bluemarble WHERE ID=?',[request.query.ID], function(err, rows, fields){
		if (err){
			console.log('error: ', err);
			throw err;
		}
		response.send(rows);
	});
});



app.get('/', function(req, res)
{
	res.sendFile(path.join(__dirname + '/default.html'));
});


app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});