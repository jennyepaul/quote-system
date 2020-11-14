var express = require('express');
var mysql = require('mysql');

var connection = mysql.createConnection ({
	host: 'blitz.cs.niu.edu',
	user: 'student',
	password: 'student',
	database: 'csci463'
});

connection.connect();


module.exports = {
	getAll: async result => {	
	connection.query('SELECT * FROM parts', function(error, rows, fields) {

		if (!!error) 
			console.log('Error in query');

		console.log('Sucessful');
//		console.log(rows);
		});
	}
}



