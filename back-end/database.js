var express = require('express');
var mysql = require('mysql');

var connect = mysql.createConnection ({
	host: 'blitz.cs.niu.edu';
	user: 'student',
	password: 'student',
	database: 'csci463'
});

connection.connect() (function(error) {
	if (!!error) {
		console.log('Error');
	} else {
		console.log('Connected');
	}
});

app.get('/', function(req,resp) {

	connection.query("SELECT * FROM csci467", function(error, rows, fields)
		if (!!error) {
			console.log('Error in the query');
		} else {
			console.log('Sucessful');
			colsole.log(rows);
		}
	});
});

app.listen(1337);

