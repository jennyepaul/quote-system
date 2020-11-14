var express = require('express');
var mysql = require('mysql');

var connect = mysql.createConnection ({
	host: 'blitz.cs.niu.edu',
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

//app.get('/', function(req,resp) {

module.exports = {
	getAll: async result => {	
	connection.query("SELECT * FROM parts", function(error, rows, fields) {

		if (!!error) 
			console.log('Error in query');

		console.log('Sucessful');
		console.log(rows);
		});
	}
}

//app.listen(1337);

